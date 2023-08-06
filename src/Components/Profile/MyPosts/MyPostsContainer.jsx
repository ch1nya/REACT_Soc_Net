import React from "react";
import { addPostActionCreate, updateNewpostTextActionCreate } from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";



const MyPostsContainter = (props) => {
    
    const state = props.store.getState()
    const {posts,newPostText} = state.profile
    debugger
    let addPost  = () => {
            props.store.dispatch(addPostActionCreate()) 
    }
    
    let onPostChange = (text) => {
        let action = updateNewpostTextActionCreate(text)
        props.store.dispatch(action)

    }
debugger
    return  (
        <MyPosts 
        updateNewpostText={onPostChange}
        addPost = {addPost}
        posts = {posts}
        newPostText = {newPostText}
        // posts = {state.profile.posts}
        // newPostText = {state.profile.newPostText}
        />
    )
}

export default MyPostsContainter