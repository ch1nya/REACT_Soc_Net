import React from "react";
import { addPostActionCreate, updateNewpostTextActionCreate } from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newPostText: state.profile.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody)=> {
            dispatch(addPostActionCreate(newPostBody))
        },

    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer