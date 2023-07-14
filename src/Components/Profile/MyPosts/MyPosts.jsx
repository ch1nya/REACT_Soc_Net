import React from "react";
import s from "./MyPosts.module.css"
import Post from "../Post/Post";





const MyPosts = (props) => {
    
    let postsElements = props.posts.map((p)=> ( <Post message={p.post} likesCount={p.likesCount} />))

    let addPostButton  = () => {
        let text = newPostElement.current.value;
        props.addPost(text)}

    let newPostElement = React.createRef()

    

    return  (
    <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement} cols="30" rows="10"></textarea>
            </div>
            <div>
                <button onClick={addPostButton}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>    
            {postsElements}
        </div>
    </div>
    )
}

export default MyPosts