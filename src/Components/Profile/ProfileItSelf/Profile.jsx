import React,{ useRef } from "react";
import s from './Profile.module.css'
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainter from "../MyPosts/MyPostsContainer";



const Profile = (props) => {

    return <div className="profileWrap">
                <div>
                    <ProfileInfo />
                    <MyPostsContainter
                        state={props.state}
                        dispatch={props.dispatch}
                    />
                </div>
          </div>
}

export default Profile
