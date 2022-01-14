import React from 'react'
import { useSelector } from 'react-redux'
import Admin from './Admin/Admin'
import User from './User/User'

export default function Logged(props) {
    const user = useSelector(state => state.user.info)
    // 
    let renderRole
    // Role = 1 là admin, role = 2 là user
    if(user.role === "1")
        renderRole = <Admin />
    else
        renderRole = <User />
    return (
        <>
            { renderRole }  
        </>
    )
}
