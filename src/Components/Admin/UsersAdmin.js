import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import action from '../../rootState/actions'



export default function UsersAdmin() {
    const listUsers = useSelector(state=>state.users.list)
    const dispatch = useDispatch()
    const users = listUsers.filter(user => user.role === '2')
    // delete user
    const delete_user = (user) => {
        dispatch(
            action.REMOVE_USER(user)
        )
    }
    return (
        <div>
            <title>Users</title>
            
            <table className='table' style={{width:'90%',textAlign: 'center',margin:'10px auto '}}>
                <thead style={{backgroundColor:'gray',color:'white',fontSize:'20px', fontWeight:'bold'}}>
                    <tr style={{border: 'solid 1px'}}> 
                    <td><p>ID</p></td>
                    <td><p>Họ Tên</p></td>
                    <td><p>Avatar</p></td>
                    <td><p>Giới tính</p></td>
                    <td><p>Điện thoại</p></td>
                    <td><p>Phân quyền</p></td>
                    <td><p>Status</p></td>
                    <td><p>Số lượng bài viết</p></td>
                    <td><p></p></td>
                    </tr>
                </thead>
                <tbody >
                    {
                        users.map(user => (
                            <tr>
                                <td><p>{user.uid}</p></td>
                                <td><p>{user.uname}</p></td>
                                <td><img src={'./images/' + user.image } style={{width:'40px',height:'40px'}} /></td>
                                <td><p>{user.gender}</p></td>
                                <td><p>{user.phone}</p></td>
                                <td><p>{user.role}</p></td>
                                <td><p>{user.status}</p></td>
                                <td><p>{user.sumPost}</p></td>
                                <td>
                                    <button onClick={delete_user.bind(this, user)}
                                        className="text-danger border-0 bg-white"> {/* delete */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                
                </tbody>
            </table>
        </div>
    )
}
