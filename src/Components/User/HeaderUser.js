import React from 'react'
import { useSelector } from 'react-redux'
import MenuUser from './MenuUser'
export default function HeaderUser() {
    const user = useSelector(state => state.user.info)

    return (
        <div>
            < MenuUser />
            {/* <h3 className="text-right">{ user.uname } logged</h3> */}
        </div>
    )
}
