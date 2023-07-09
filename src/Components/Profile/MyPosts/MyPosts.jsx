import React,{ useRef } from "react";
import Post from '../Post/Post.jsx'
import s from "./MyPosts.module.css"

const MyPosts = (props) => {
    return  (
    <div>
        <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Add post</button>
            <button>Remove button</button>
        </div>
        <div className={s.posts}>    
            <Post message ='First post...........First post.....First post'/>
            <Post message ='Second post/////////..........Second post'/>
            <Post message ='Third post..........Third post.........Third post'  />
        </div>
    </div>
    )
}

export default MyPosts