import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import action from '../../../rootState/actions';

export default function EditProfile() {
    const user = useSelector(state => state.user.info)
    const dispatch = useDispatch()
    const [textInputName, settextInputName] = useState(user.uname);
    const [textInputPhone, settextInputPhone] = useState(user.phone);

    // 
    const submit = () => {
        if(textInputName!=='' && textInputPhone !=='') {
            if(textInputName.trim().length > 20) {
                document.getElementById('helpId1').innerHTML = '* Tên không được quá 20 ký tự *';
            } else if(textInputPhone.length > 10){
                document.getElementById('helpId2').innerHTML = '* SĐT không được quá 10 số *';
            } else if(Number(textInputPhone) === false) {
                document.getElementById('helpId2').innerHTML = '* SĐT không chỉ được nhập số*';
            } else {
                document.getElementById('helpId1').innerHTML = '';
                document.getElementById('helpId2').innerHTML = '';
                // dispatch
                dispatch(action.UPDATE_INFOUSER(
                    {
                        user:user,
                        name:textInputName,
                        phone:textInputPhone
                    }
                ))
            }
        } else if(textInputName === ''){
            document.getElementById('helpId1').innerHTML = '* Tên không được bỏ trống *';
        } else if(textInputPhone === ''){
            document.getElementById('helpId2').innerHTML = '* SĐT không được bỏ trống *';
        }
    }
    // 
    return (
        <>  
            <div className="col-12 text-center mt-2">
                <button type="button" className="btn btn-success btn-sm" data-toggle="modal" data-target="#modelId">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg> Thay đổi thông tin
                </button>
            </div>
            
            <div className="modal fade" id="modelId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thay đổi thông tin</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        <div className="modal-body">
                        <div className="container-fluid">
                            <div className="form-group">
                            <label>Tên người dùng</label>
                            <input type="text" value={textInputName} className="form-control" aria-describedby="helpId"
                                onChange={e => settextInputName(e.target.value) }
                            />
                            <small id="helpId1" className="text-danger"></small><br/>
                            </div>
                            <div className="form-group">
                            <label>Số điện thoại</label>
                            <input type="text" value={textInputPhone} className="form-control" aria-describedby="helpId"
                                onChange={e => settextInputPhone(e.target.value) }
                            />
                            <small id="helpId2" className="text-danger"></small><br/>
                            </div>
                        </div>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                        <button className="btn btn-success" onClick={submit}>Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
