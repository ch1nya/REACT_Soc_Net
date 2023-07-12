import React from "react";
import s from './FriendListVidget.module.css'
import { NavLink } from "react-router-dom";


const FriendListVidget = (props) => {
    let FriendListVidgetAvatar = props.friendList.map(fl => <friendList friendAva={fl.avatar} />)
    let FriendListVidgetName = props.friendList.map(fl => <friendList friendName={fl.name}  />)
 
    return (
        <div>
            <div className={s.avatar}>
                <div>{FriendListVidgetAvatar}</div>
            </div>
            <div className={s.name}>
                <div>{FriendListVidgetName}</div>
            </div>
        </div>
    )
}

export default FriendListVidget