import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import action from '../../../rootState/actions'

export default function CommentForm(props) {
    const dispatch = useDispatch()
    const user = props.user
    const post = props.post
    // 
    const [textCmt, setTextCmt] = useState("")

    return (
        <div>
            <div className="row">
                <div className="col-2 text-right">
                    <img src={"images/" + user.image} style={{width: "40px", height: "40px"}} className="rounded-circle"/>
                    <div className={ user.status === '1' ? "bg-success" : ""}
                        style={{
                            width:"10px",
                            height:"10px",
                            position:"absolute",
                            top:"33px",
                            right:"17px",
                            borderRadius:"360px"                                            
                        }}>
                    </div>
                </div>
                <div className="col-7">
                    <input type="text" className="form-control h-100 rounded-pill" 
                        placeholder="Viết bình luận" 
                        value={textCmt}
                        onChange={e => setTextCmt(e.target.value) }
                    />
                </div>
                <div className="col-3">
                <button className="h-100 btn-sm border-0 bg-white" type="" 
                    onClick={ () => {
                            if(textCmt!=='') {
                                setTextCmt("")
                                dispatch(action.COMMENT({
                                    user: user, post: post, comment: textCmt
                                }))
                            }
                        }
                    }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338 7.494-7.494Z"/>
                    </svg>
                </button>
                </div>
            </div>
        </div>
    )
}