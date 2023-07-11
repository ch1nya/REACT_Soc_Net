import React from "react";
import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNyw4SJ6vuJ3B1-3SsFeMUPGo7lZBcDIzBA&usqp=CAU" alt="" />
            <div>
                {props.message}
            </div>
            <div>
                <span>{props.likesCount} like</span>
            </div>
            
        </div>
        ) 
}

export default Post