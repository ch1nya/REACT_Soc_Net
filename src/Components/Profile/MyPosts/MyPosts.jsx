import React from "react";
import s from "./MyPosts.module.css"
import Post from "../Post/Post";
import {addPostActionCreate, updateNewpostTextActionCreate} from "../../../Redux/profileReducer";
import MyPostsForm from "./MyPostsForm";
import {reduxForm} from "redux-form";


const MyPosts = (props) => {
    console.log(props)
    let postsElements = props.posts.map((p) => (<Post message={p.post} likesCount={p.likesCount}/>))

    let newPostElement = React.createRef()

    const addNewPost = (e) => {
        e.preventDefault()
        console.log(e, props)
        props.addPost(props.newPostText || 'Ты увидишь это в посте если props.newPostText undefined или null')
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewpostText(text) //прихуярить monitor!!!
        // а тут у тебя ещё updateNewpostText не готов
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <MyPostReduxForm
                ref={newPostElement} // посмотри как Димыч предлагает связывать state и форму и убери это потом
                onSubmit={addNewPost}
                onChange={onPostChange}
            />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
const MyPostReduxForm = reduxForm({form: 'DialogAddPostForm'})(MyPostsForm)

export default MyPosts
