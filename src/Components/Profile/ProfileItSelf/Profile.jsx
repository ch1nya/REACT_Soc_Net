import React,{ useRef } from "react";
import s from './Profile.module.css'
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainter from "../MyPosts/MyPostsContainer";



const Profile = (props) => {
    
    return <div className="profileWrap">
                
                
                <div>
                    <ProfileInfo />
                    <MyPostsContainter store={props.store}/>
                </div>
          </div>
}

export default Profile