import React from 'react'
import { useDispatch } from 'react-redux'
import config from '../../../config'
import action from '../../../rootState/actions'


export default function Realtime() {
    const dispatch = useDispatch()
    if(config.REAL_TIME.USER)
        setInterval(() => {
            dispatch(action.REAL_TIME())
        }, config.REAL_TIME.timedelay)
        
    return (
        <></>
    )
}