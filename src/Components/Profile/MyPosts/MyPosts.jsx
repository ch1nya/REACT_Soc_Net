import React from "react";
import s from "./MyPosts.module.css"
import Post from "../Post/Post";
import { addPostActionCreate, updateNewpostTextActionCreate } from "../../../Redux/profileReducer";
import MyPostsForm from "./MyPostsForm";
import { reduxForm } from "redux-form";



const MyPosts = (props) => {
    
    
    let postsElements = props.posts.map((p)=> ( <Post message={p.post} likesCount={p.likesCount} />))

    let newPostElement = React.createRef()

    let addNewPost  = (values) => {
        debugger
            props.addPost(values.newPostBody)
    }

    let onPostChange = () => {
        let text = newPostElement.current.value; 
        props.updateNewpostText(text) //monitor!!!
    } 
    return  (
    <div className={s.postBlock}>
        <h3>My posts</h3>
        <MyPostReduxForm onSubmit={addNewPost}/>
        <div className={s.posts}>    
            {postsElements}
        </div>
    </div>
    )
}
const MyPostReduxForm = reduxForm({form: 'DialogAddPostForm'})(MyPostsForm)

export default MyPosts