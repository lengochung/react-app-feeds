
import load from "../../APIs"

function load_data () {
    const data = load("posts").ast_post()
    
    let posts = data.posts
    const likes = data.likes
    const comments = data.comments

    posts.forEach(post => {
        post.likes = likes.filter(like => like.pid === post.pid)
        post.comments = comments.filter(cmt => cmt.pid === post.pid)
    })

    return posts
}


const initialState = {
    list: load_data()
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REAL_TIME" : {
            return {
                list: load_data() === [] ? state.list : load_data()
            }
        }
        case "LIKE": {
            let list = [...state.list]
            for (const key in list) {
                if(list[key] === action.payload.post){
                    list[key].likes.push(action.payload.user)
                    list[key].sumLike++;
                    break;
                }
            }
            load("likes").insert(null, action.payload.user.uid, action.payload.post.pid)
            return {
                list: list
            }
        }
        case "DISLIKE": {
            let list = [...state.list]
            for (const key in list) {
                if(list[key] === action.payload.post){
                    list[key].likes = list[key].likes.filter(li => li !== action.payload.user)
                    list[key].sumLike--;
                    break;
                }
            }
            load("likes").deleteDlWhere("uid", action.payload.user.uid, "pid", action.payload.post.pid)
            return {
                list: list
            }
        }
        case "COMMENT": {
            load("comments").insert(action.payload.user.uid, action.payload.post.pid, action.payload.comment)
            let posts = [...state.list]
            for (const i in posts) {
               if(posts[i] === action.payload.post) {
                    let user = action.payload.user
                    user.comment = action.payload.comment
                    posts[i].comments = [user, ...posts[i].comments]
                    posts[i].sumCmt++
                    break;  
               }
            }
            return {
                list: posts
            }
        }
        case "DELETE_COMMENT": {
            load("comments").deleteWhere("cid", action.payload.cmt.cid)
            let posts = [...state.list]
            for (const i in posts) {
                if (posts[i] === action.payload.post ) {
                    posts[i].comments = posts[i].comments.filter(cmt => cmt !== action.payload.cmt)
                    posts[i].sumCmt--
                    break;
                }
            }
            return {
                list: posts
            }
        }
        case "CREATE_POST": {
            load("posts").insert(action.payload.user.uid, action.payload.content)
            
            let user = action.payload.user
                user.sumCmt = 0
                user.sumLike = 0
                user.likes = []
                user.content = action.payload.content
                user.comments = []
                user.pid = Math.floor(Math.random()*1000 + 999)
            let posts = [user, ...state.list]
            return {
                list: posts
            }
        }
        case "DELETE_POST": {
            load("posts").deleteWhere("pid", action.payload.pid)
            let posts = [...state.list].filter(post => post.pid !== action.payload.pid)
            return {
                list: posts
            }
        }
        default:
            return state
    }
}

export default postsReducer