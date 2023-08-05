import React from "react";
import {addPostActionCreate, updateNewpostTextActionCreate} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    const state = props.state;
    const { posts, newPostText } = state.profile

    const addPost = () => {
        props.dispatch(addPostActionCreate())
    }

    const onPostChange = (text) => {
        const action = updateNewpostTextActionCreate(text)
        props.dispatch(action)
    }

    return (
        <MyPosts
            updateNewpostText={onPostChange}
            addPost={addPost}
            posts={posts}
            newPostText={newPostText}
        />
    )
}

export default MyPostsContainer
