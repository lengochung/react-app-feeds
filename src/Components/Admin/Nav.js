import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import action from '../../rootState/actions'
import load from '../../APIs'

export default function Nav() {
    const admin = useSelector(state => state.user.info)
    const dispatch = useDispatch()
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light pl-0 ml-0">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="mr-auto">

                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item mt-2">
                            <p className="nav-link"><b>{admin.uname}</b></p>
                        </li>
                        <li className="nav-item dropdown mt-2">
                            <img src={"images/"+admin.image} width="50px" height="50px" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#"
                                     onClick={() => {
                                        load("users").updateWhere("status", 0, "uid", admin.uid)
                                        setTimeout(() => { dispatch(action.LOGOUT(admin)) }, 3000)
                                    }}
                                >Đăng xuất
                                </a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}
