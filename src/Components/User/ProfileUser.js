import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Post from './Post';
import CreatePost from './scrypts/CreatePost';
import EditProfile from './scrypts/EditProfile';


export default function ProfileUser() {
    const user = useSelector(state => state.user)
    const posts = useSelector(state => state.posts.list)
    return (
        <>  
        <title>Profile - { user.info.uname }</title>
            <div className="row mt-4 p-3">
                <div className="col-4 border-right">
                    <div className="row">
                        <div className="col-12 test-center">
                            <img src={"images/"+user.info.image} className="rounded" alt="" style={{width:'210px',marginLeft:'20%'}}/>
                            <h5 className="text-center mt-3 text-danger">{user.info.uname}</h5> 
                        </div>
                    </div>
                    <div className="row mx-4">
                        <div className="col-12">
                     
                        <b>Họ và tên : </b> {user.info.uname}<br/>
                        <b>Số điện thoại : </b> {user.info.phone}<br/>
                        <b>Giới tính : </b> {user.info.gender}
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <EditProfile />
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-12">
                            <CreatePost />
                        </div>
                    </div>
                    <div className="row rounded mt-3">
                        <div className="col-12 mt-3">
                            {   
                                posts.filter(post => user.info.uid == post.uid)
                                    .map(post => <Post post={post} key={post.pid}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
