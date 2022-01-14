import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

import '../../../css/hover_aLike.css'
import action from '../../../rootState/actions'

export default function Posts(props) {
    const dispatch = useDispatch()
    const post = props.post
    const del_post = (post) => {
        dispatch(
            action.DELETE_POST(post)
        )
    }
    return (
        <>
            <div className="col-4 border">
                {post.content}
            </div >
            <div className="col-2 border">
                {post.date}
            </div >
            <div className="col-1 border">
                {post.uname}
            </div >
            <div className="col-1 border">
                <div className="nLike">
                    <p>{post.sumLike} </p>
                </div>
                <div className="uLike">
                    {
                        post.likes.map(like => (
                            <p key={like.lid} className="m-0 p-0 text-left rounded">{like.uname}</p>
                        ))
                    }
                </div>
            </div >
            <div className="col-1 border">
                {post.sumCmt} 
            </div>
            <div className="col-2 border">
                {/* <button type="button" className="btn btn-success">Sửa</button>|  */}
                <button type="button" className="btn btn-danger border-0 bg-white text-danger"
                    onClick={del_post.bind(this,post)} //jsx viết khác
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                </button>
            </div>
        </>
    )
}
