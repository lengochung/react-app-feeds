import React from 'react'
import { Link } from 'react-router-dom'
export default function Menu() {
    return (
        <div>
            <img src="./images/login.jpeg" style={{width:'150px',marginLeft:'12%'}} className="my-4"></img>
        
            <ul className="nav flex-column ">
                <Link to="/" className="nav-link active">
                    <li className="nav-item  text-light h5"> <i class="nav-icon fas fa-home"></i> Trang chủ </li>
                </Link>
                
                <Link to="/users" className="nav-link active">
                    <li className="nav-item text-light h5"> <i class="fas fa-users nav-icon"></i>  Người dùng </li>
                </Link>

                <Link to="/blogs" className="nav-link active">
                    <li className="nav-item  text-light h5"><i class="fas fa-book"></i> Bài viết </li>
                </Link>
            </ul>
        </div>
    )
}
