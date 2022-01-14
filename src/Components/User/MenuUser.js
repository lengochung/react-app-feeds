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
            <nav className="navbar navbar-expand-sm  bg-dark" style= {{padding: "0% 1%"}}>
                <a className="navbar-brand "><img src="./images/login.jpeg" style={{width:'50px'}}></img></a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">Menu</span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0" style={{marginLeft:'15%'}}>
                    <a className="nav-link active text-light h6">
                        <li className="nav-item active">
                            <div className="mt-1">
                                <i className="fas fa-home"></i> Trang chủ |
                            </div>
                        </li>
                   </a>

                    <Link to="/" className="nav-link  text-light h6">
                        <li className="nav-item">
                            <div className="mt-1">
                                 Bài viết |
                            </div>
                        </li>
                   </Link>

                    <Link to="/profile" className="nav-link  text-light h6">
                        <li className="nav-item">
                            {/* <i className="fas fa-user"></i>  */}
                            
                            <img src={ "./images/" + user.image} className="rounded-circle"
                                style={{
                                    width: "30px", height: "30px"
                                }}
                             />
                            { user.uname } |
                            
                        </li>
                   </Link>
                    
                    <li className="nav-item  text-light h6">
                        <a className="nav-link" href="" 
                            onClick={() => {
                                load("users").updateWhere("status", 0, "uid", user.uid)
                                setTimeout(() => { dispatch(action.LOGOUT(user)) }, 1000) 
                            }}
                        >
                            Đăng xuất
                       </a>
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
