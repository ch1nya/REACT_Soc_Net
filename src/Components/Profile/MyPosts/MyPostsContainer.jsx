import React from "react";
import { addPostActionCreate, updateNewpostTextActionCreate } from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";



const MyPostsContainter = (props) => {
    debugger
    let state = props.store.getState();

    let addPost  = () => {
            props.store.dispatch(addPostActionCreate()) 
    }
    
    let onPostChange = (text) => {
        let action = updateNewpostTextActionCreate(text)
        props.store.dispatch(action)

    }

    return  (
        <MyPosts 
        updateNewpostText={onPostChange}
        addPost = {addPost}
        posts = {state.profilePage.posts}
        newPostText = {state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainter