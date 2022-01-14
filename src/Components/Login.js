import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import action from '../rootState/actions'

export default function Login() {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.list)
    // state
    const [mssv, setMssv] = useState("")
    const [password, setPassword] = useState("")
    // 
    let [msg, setMsg] = useState({mssv, password})
    // let [mssvMessage, setmssvMessage] = useState("")
    const submitLoginHandle = () => {
        let msgMssv, msgPassword
        new Promise((resolve, reject) => {
            if(users.some(user => user.uid === mssv))
                return resolve()
            else {
                msgMssv = "MSSV không tồn tại trong hệ thống!"
                return reject()
            }
        }).then(result => {
            if(users.find(user => user.uid === mssv&&user.uid === password))
                return Promise.resolve()
            else {
                msgPassword = "Mật khẩu không đúng!"
                return Promise.reject()
            }
        }).then(result => {
            dispatch(action.LOGIN(users.filter(user => user.uid === mssv&&user.uid === password)[0]))
        }).catch(error => {
            setMsg({
                mssv: msgMssv, password: msgPassword
            })
        })
    }
    return (
        <div className="container   form col-lg-6 col-md-8 col-sm-12 col-xs-12 px-4 bg-white" style={{marginTop:'10%',boxShadow:'0px 1px 13px 10px grey'}}>
              <img src="./images/login.jpeg" style={{marginLeft:'30%'}} ></img>
            <div className="justify-content-center pt-3">
                <form method="post">
                    <div className="form-group">
                    <label> Tên đăng nhập <b style={{color: "red"}}>*</b></label>
                        <input value={mssv} onChange={e => setMssv(e.target.value) }
                            type="text" className="form-control" placeholder="MSSV"/>
                        <small id="helpId" className="text-danger">{ msg.mssv }</small>
                    </div>
                    <div className="form-group">
                        <label>Mật khẩu <b style={{color: "red"}}>*</b></label> 
                        <input value={password} onChange={e => setPassword(e.target.value)} 
                            type="password"className="form-control" placeholder="MSSV là mật khẩu" aria-describedby="helpId"/>
                        <small id="helpId" className="text-danger">{ msg.password }</small>
                    </div>
                    <button onClick={ submitLoginHandle }
                        type="button" className="btn btn-danger mt-3 w-100" style={{marginBottom:'20px'}}> <h5> Đăng nhập</h5> </button>
                </form>
            </div>
        </div>
    )
}
