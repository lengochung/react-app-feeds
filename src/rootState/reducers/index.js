import { combineReducers } from "redux";
import postsReducer from "./posts";
import userReducer from "./user";
import usersReducer from "./users";


const rootReducer = combineReducers({
    users: usersReducer,// tat ca thong tin
    user: userReducer,//thong tin nguoi dang nhap
    posts: postsReducer//tat ca bai post trong csdl
})

export default rootReducer