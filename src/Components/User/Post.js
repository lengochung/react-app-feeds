import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import action from '../../rootState/actions'
import CommentForm from './scrypts/CommentForm'
import Comment from './scrypts/Comment'
import '../../css/hover_uLike.css'

export default function Post(props) {
    const post = props.post
    const user = useSelector(state => state.user.info)
    const dispatch = useDispatch()
    // State
    const [like, setLike] = useState(
        post.likes.some(like => like.uid === user.uid)
    )
//  like and dislike
    const like_dislike = (post) => {
        setLike(!like)
        if(!post.likes.find(like => user.uid === like.uid)) {
            dispatch(action.LIKE({ post: post, user: user}))
        } else {
            dispatch(action.DISLIKE({ post: post, user: user}))
        }
    }
//  delete Post
    const deletePost = (post) => {
        dispatch(
            action.DELETE_POST(post)
        )
    }

    return (
        <>
            <div className="card mb-3" style={{width: "100%"}}>
                <div className="card-body">
                <h5 className="card-title">
                    <div className="row">
                        <div className="col-10">
                            <div className="row">
                                <div className="col-1 ">
                                    <img src={"images/"+post.image} style={{width: "40px", height: "40px"}} className="rounded-circle " /> 
                                    <div className={ post.status === '1' ? "bg-success" : ""}
                                        style={{
                                            width:"10px",
                                            height:"10px",
                                            position:"absolute",
                                            top:"33px",
                                            right:"-5px",
                                            borderRadius:"360px"                                            
                                        }}>
                                    </div>
                                </div>
                                <div className="col-10 p-0 ml-3">
                                    {post.uname}
                                </div>
                            </div>
                        </div>
                        <div className="col-2 text-right"
                            style={{
                                display: user.uid === post.uid ? "block" : "none"
                            }}
                        >
                            <div className="dropdown open">
                                <button className="dropdown-toggle bg-white btn-sm border-0" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="triggerId">
                                    {/* <button className="dropdown-item" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                        </svg> Chỉnh sửa
                                    </button> */}
                                    <button className="dropdown-item text-danger" onClick={deletePost.bind(this, post)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg> Xoá
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </h5>
                <small className="card-subtitle mb-2 text-muted">{post.date}</small>
                <p className="card-text">{post.content}</p>
                <hr className="w-100"/>
                <div className="row">
                    <div className="col-4 border-right text-center" style={{cursor: "pointer"}} onClick={like_dislike.bind(this, post)}>
                        <span className="mr-2">{post.sumLike}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            width="30" height="30" fill="currentColor" className="bi bi-heart myDIV  mr-2" viewBox="0 0 16 16">
                            <path className={ like ? "text-danger" : "" } d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                        
                        
                            <div className="hide ml-5" style={{
                                background: post.sumLike == 0 ? "white" : "yellow"
                            }}>
                                {
                                    post.likes.map(like => (
                                        <p className="p-0 m-0 text-left rounded  ml-5" key={like.uname}>{like.uname}</p>
                                    ))
                                }
                            </div>
                        
                         { like ? "Bỏ thích" : "Thích" }
                    </div>
                    <div className="col-4 border-right text-center">
                    <span className="mr-2">{post.sumCmt}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chat-square-dots mr-2" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg> Bình luận
                    </div>
                    <div className="col-4 text-center">
                    {/* <span className="mr-2">{post.sumCmt}</span> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-reply mr-2" viewBox="0 0 16 16">
                        <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z"/>
                    </svg> Chia sẻ
                    </div>
                </div>
                <hr className="w-100"/>
    {/* Comment Form */}
                <CommentForm user={user} post={post}/>
    {/* End Comment Form */}
    {/* Comments */}
                {
                    post.comments.map((cmt, i) => (
                        <Comment cmt={cmt} key={i} user={user} post={post} />
                    ))
                }
    {/* Comments */}
                </div>
            </div>
        </>
    )
}
