import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'
import CreatePost from './scrypts/CreatePost'

export default function BlogsUser() {
    const posts = useSelector(state => state.posts.list)
    // 
    return (
        <>
            <title>New Feeds</title>
            {/* Create post */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12"
                        style={{
                            margin: "auto"
                        }}
                    >
                        <CreatePost/>
                    </div>     
                </div>
            </div>
            {
                posts.map( (post, index) => 
                    <div key={index} className="container">
                        <div className="row">
                            
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12"
                                style={{
                                    margin: "auto"
                                }}
                            >
                                
                                    <Post post={post}  />
                                
                            </div>                            
                            
                        </div>
                    </div>
                )
            }
        </>
    )
}
