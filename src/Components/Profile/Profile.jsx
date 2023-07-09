import React,{ useRef } from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    return (
        <div>
            <img src='https://images.unsplash.com/photo-1675966356873-06f6eedffeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80'></img>
        <div>
        ava + desdcription
        </div>
            <MyPosts />
        </div>
    )
}

export default Profile