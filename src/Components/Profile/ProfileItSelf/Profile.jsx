import React,{ useRef } from "react";
import s from './Profile.module.css'
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";



const Profile = (props) => {

    
    return <div className="profileWrap">
                
                
                <div>
                    <ProfileInfo />
                    <MyPosts posts={props.posts}
                             dispatch = {props.dispatch}
                             newPostText={props.newPostText}

                            //  addPost={props.addPost}
                            //  updateNewPostText={props.updateNewPostText}
                             />
                </div>
          </div>
}

export default Profile