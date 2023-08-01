import React,{ useRef } from "react";
import s from './Profile.module.css'
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";



const Profile = (props) => {

    
    return <div className="profileWrap">
                
                
                <div>
                    <ProfileInfo />
                    <MyPosts posts={props.ProfilePage.posts}
                             newPostText={props.ProfilePage.newPostText}
                             dispatch={props.dispatch}
                             />
                </div>
          </div>
}

export default Profile