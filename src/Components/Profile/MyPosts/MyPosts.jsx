import React from "react";
import s from "./MyPosts.module.css"
import Post from "../Post/Post";
import { addPostActionCreate, updateNewpostTextActionCreate } from "../../../Redux/profileReducer";



const MyPosts = (props) => {
    debugger
    
    let postsElements = props.posts.map((p)=> ( <Post message={p.post} likesCount={p.likesCount} />))

    let newPostElement = React.createRef()

    let addPostButton  = () => {
        props.dispatch(addPostActionCreate())
        
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewpostTextActionCreate(text))
    }

    return  (
    <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea 
                    ref={newPostElement} 
                    value={props.newPostText} 
                    onChange={onPostChange}
                    />
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