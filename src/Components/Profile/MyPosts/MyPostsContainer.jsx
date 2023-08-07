import React from "react";
import { addPostActionCreate, updateNewpostTextActionCreate } from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";



const MyPostsContainter = (props) => {
    debugger
    // const state = props.store.getState()
    
    
    return (
        <StoreContext.Consumer>{
            (store)=> {
                const { posts, newPostText } = store.getState().profile
                let addPost = () => {
                    store.dispatch(addPostActionCreate())
                }
            
                let onPostChange = (text) => {
                    let action = updateNewpostTextActionCreate(text)
                    store.dispatch(action)
                }
            
                return <MyPosts
                updateNewpostText={onPostChange}
                addPost={addPost}
                posts={store.getState().profile.posts}
                newPostText={store.getState().profile.newPostText}
            />}}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainter