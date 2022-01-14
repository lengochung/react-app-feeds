import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import action from '../../rootState/actions'
import load from '../../APIs'

export default function MenuUser() {
    const user = useSelector(state => state.user.info)
    const dispatch = useDispatch()
    return (
        <>
            <nav className="navbar navbar-expand-sm  bg-dark">
               <Link to="/" className="navbar-brand"><img src="./images/login.jpeg" className=""></img></Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                   <Link to="/" className="nav-link active text-light h6">
                        <li className="nav-item active">
                            Trang chủ |
                        </li>
                   </Link>

                   <Link to="/blogs" className="nav-link  text-light h6">
                        <li className="nav-item">
                            Bài viết |
                        </li>
                   </Link>

                   <Link to="/profile" className="nav-link  text-light h6">
                        <li className="nav-item">
                            { user.uname } |
                        </li>
                   </Link>
                    
                    <li className="nav-item  text-light h6">
                       <Link className="nav-link" href="" 
                            onClick={() => {
                                load("users").updateWhere("status", 0, "uid", user.uid)
                                setTimeout(() => { dispatch(action.LOGOUT(user)) }, 3000) 
                            }}
                        >
                            Đăng xuất
                       </Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Tìm kiếm" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
                </form>
                </div>
            </nav>
        </>
    )
}
