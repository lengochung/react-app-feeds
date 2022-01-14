import React from 'react'
import { useSelector } from 'react-redux'
import Post from '../User/Post'
export default function MainAdmin() {
    const users = useSelector(state => state.users.list)
    const posts = useSelector(state => state.posts.list)
    return (
        <main className="mt-3" >
            <title>Dashboard</title>

            <div style={{ backgroundImage: 'url(./images/bg.jpg)' }}>
                <div className="content-header">
                    <h1 className="m-0 text-center font-weight-bold" style={{ fontSize: '3rem' }}>THỐNG KÊ SỐ LIỆU </h1>
                    <h1 className="m-0 text-center font-weight-bold" style={{ fontSize: '3rem' }}>CỦA WEB CAT </h1>
                </div>
                <div style={{ padding: '2% 20%' }}>
                   
                  
                    <div className="small-box bg-warning p-4 mb-4">
                        <div className="row">
                        <div className="col-8">
                        <div className="inner">
                            <h3>{users.length -1}</h3>
                            <p> Tổng số lượng người dùng </p>
                        </div>
                        </div>
                        <div className="col-4">
                        <div className="icon">
                            <i className="fas fa-user-friends " style={{fontSize: '100px'}}  />
                        </div>
                        </div>
                        </div>

                       
                   
                       
                    </div>
                    <div className="small-box bg-success p-4">
                        <div className="inner">
                            <h3>{posts.length}</h3>
                            <p> Tổng số bai Post </p>
                        </div>
                        <div className="icon">
                            <i className=" fas fa-user-cog" />
                        </div>
                       
                    </div>
                </div>
                <div  className="small-box p-5 col-8 " style={{margin:"auto"}} >
                    
                      <Post   post={posts[0]} />
                </div>
            </div>

        </main>

    )
}
