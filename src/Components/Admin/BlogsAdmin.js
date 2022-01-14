import React from 'react'
import { useSelector } from 'react-redux'
import Posts from './scrypts/Posts'
export default function BlogsAdmin() {
    const posts = useSelector(state => state.posts.list)
    
    return (
        <>
            <title>Posts</title>
            <div className="row m-3">
    
                <div className="col-12 text-center" style={{backgroundColor:'gray',color:'white', fontWeight:'bold'}}>
                    <div className="row">
                        <div className="col-1 border">
                            <b>STT</b>
                        </div>
                        <div className="col-4 border">
                            <b>Nội dung bài viết</b>
                        </div >
                        <div className="col-2 border">
                            <b>Ngày đăng</b>
                        </div >
                        <div className="col-1 border">
                            <b>Người đăng</b>
                        </div >
                        <div className="col-1 border">
                            <b>Lượt thích</b>
                        </div >
                        <div className="col-1 border">
                            <b>Số cmt</b>
                        </div>
                        <div className="col-2 border">
                            
                        </div >
                    </div >
                </div >
                <div className="col-12">
                    {
                        posts.map((post,index) => (
                            <div className="row" key={index+1}>
                                <div className="col-1 border">
                                    {index+1}
                                </div >
                                <Posts post={post}/>
                            </div>
                        ))
                    }
                </div >
            </div >
        </>
    )
}
