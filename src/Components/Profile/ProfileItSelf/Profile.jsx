import React, { useRef } from "react";
import s from "./Profile.module.css";
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainter from "../MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className="profileWrap">
      <div>
        <ProfileInfo
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <MyPostsContainter />
      </div>
    </div>
  );
};

export default Profile;
