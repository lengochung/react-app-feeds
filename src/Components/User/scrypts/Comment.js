import React from 'react'
import { useDispatch } from 'react-redux'
import action from '../../../rootState/actions'

export default function Comment(props) {
    const dispatch = useDispatch()
    const cmt = props.cmt
    const user = props.user
    // 
    const deleteCmt = (post, cmt) => {
        dispatch(
            action.DELETE_COMMENT(
                {
                    post: post, cmt: cmt
                }
            )
        )
    }
    return (
        <div className="row mt-3" key={cmt.cid}>
            <div className="col-1 text-right">
                <img src={"images/" + cmt.image} style={{width: "30px", height: "30px"}} className="rounded-circle"/>
                <div className={ cmt.status === '1' ? "bg-success" : ""}
                    style={{
                        width:"10px",
                        height:"10px",
                        position:"absolute",
                        top:"26px",
                        right:"16px",
                        borderRadius:"360px"                                            
                }}>
            </div>
            </div>
            <div className="col-11">
                <div className="rounded border">
                    <div className="row pl-3 pt-1">
                    <div className="col-12 ">
                        <b>{cmt.uname}</b> 
                        <small className="float-right text-secondary mr-3">
                            { cmt.time } 
                            <span className="text-danger ml-2"
                                onClick={ deleteCmt.bind(this, props.post, cmt) }
                                style={{ display: user.uid === cmt.uid ? "visibility" : "none", cursor: "pointer"} }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </span>
                        </small>
                    </div>
                    </div>
                    <div className="row pl-3">
                    <div className="col-12 ">
                        <p>{cmt.comment}</p>
                    </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}