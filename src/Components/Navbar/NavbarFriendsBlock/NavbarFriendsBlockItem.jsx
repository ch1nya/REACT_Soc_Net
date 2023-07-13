import React from "react";
import s from './NavbarFriendsBlockItem.module.css';



const NavbarFriendsBlockItem = (props) => {
    return (
            <div className={s.friendInfo}>
                <img src={props.avatar}/>
                <div>
                    {props.name}
                </div> 
            </div> )
            }

export default NavbarFriendsBlockItem;