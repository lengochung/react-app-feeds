import React, { useState } from 'react'
import './CreatePost.css'
import { useDispatch, useSelector } from 'react-redux'
import action from '../../../rootState/actions'

export default function CreatePost() {

    const user = useSelector(state => state.user.info)
    const dispatch = useDispatch()
    const [text, setText] = useState("")

    const createPost = (user) => {
        if(text!=="") {
            dispatch(
                action.CREATE_POST({
                    user: user, content: text
                })
            )
            setText("")
        }
    }

    return (
        <>
            <div id='post_status-by-bacsiwindows' className="p-3">
                <div className='content'>
                    <img src={'./images/' + user.image } className='rounded-Cirkle ' style={{ width:"80px",
                        height:"80px",}} />
                    <div className={user.status==='1'?"bg-success":""} 
                        style={{
                        width:"15px",
                        height:"15px",
                        position:"absolute",
                        top:"60px",
                        left:"60px",
                        borderRadius:"360px"  }} > 
                    </div>
                    <div >
                        <input value={text}
                            onChange={e => setText(e.target.value)}
                            placeholder='Bạn đang nghĩ gì ?' type='text' style={{ marginLeft: "10%"
                    }}/>
                    </div>
                </div>
                <div className="d-flex flex-row bd-highlight mb-3 border-top mt-3">
                    <div className="p-3 bd-highlight">
                        <a className='btn_status'><i className="fas fa-images"></i>Ảnh</a>
                    </div>
                    <div className="p-3 bd-highlight d-sm-none d-md-block d-none">
                        <a className='btn_status'><i className="fas fa-video"></i>Video</a>
                    </div>
                    <div className="p-3 bd-highlight d-sm-none d-md-block d-none">
                        <a className='btn_status'><i className="far fa-smile"></i>Cảm xúc/Hoạt động</a>
                    </div>
                    <div className="p-3 bd-highlight ">
                        <a className='btn_status'><span>...</span></a>
                    </div>
                    <div className="p-3 bd-highlight" 
                        onClick={createPost.bind(this, user)}
                        style={{cursor: "pointer"}}>
                        <a className=' btn btn-primary btn_status text-light' style={{fontSize: '18px', textAlign: 'center',backgroundColor:'blue'}}>Đăng bài</a>
                    </div>
                </div>
            </div>
        </> 
    )
}
