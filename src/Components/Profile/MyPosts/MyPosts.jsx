import React from "react";
import s from "./MyPosts.module.css"
import Post from "../Post/Post";


import {addPostActionCreator,updateNewPostTextActionCreator } from "../../../Redux/profilePageReducer";



const MyPosts = (props) => {
    
    let postsElements = props.posts.map((p)=> ( <Post message={p.post} likesCount={p.likesCount} />))

    let addPostButton  = () => {
        props.dispatch(addPostActionCreator())
        // props.dispatch({type:'ADD-POST'}) // previous call methods
        // props.addPost() // previous call methods
        }

    let newPostElement = React.createRef()

    let postOnChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text) // just split for simplifying workflow
        props.dispatch(action)
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})  // previous call methods
        // props.updateNewPostText(text) //  previous call methods
    }
        
    return  (
    <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement} onChange={postOnChange} value={props.newPostText} cols="30" rows="10"/>
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