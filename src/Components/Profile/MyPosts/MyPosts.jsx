import React,{ useRef } from "react";
import Post from '../Post/Post.jsx'
import s from "./MyPosts.module.css"

let posts = [
    {id: 1, post:'First post...........First post.....First post', likesCount:12   }, 
    {id: 2, post:'Second post/////////..........Second post', likesCount:101   }, 
    {id: 3, post:'Third post..........Third post.........Third post', likesCount:3  },
]

let postsElements = posts.map((p)=> ( <Post message={p.post} likesCount={p.likesCount} />))

const MyPosts = (props) => {
    return  (
    <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div>
                <button>Remove button</button>
            </div>
        </div>
        <div className={s.posts}>    
            {postsElements}
        </div>
    </div>
    )
}

export default MyPosts