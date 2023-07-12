import React from "react";
import s from './Navbar.module.css'
import { NavLink } from "react-router-dom";
import FriendListVidget from "./FriendListVidget/FriendListVidget";


const Navbar = (props) => {
    debugger;
   
   return <nav className={s.nav}>
    <ul>
        <li className={s.item}>
            <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
        </li>
        <li className={s.item}>
            <NavLink to='/messages' className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
        </li>
        <li className={s.item}>
            <NavLink to='/news' className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
        </li>
        <li className={s.item}>
            <NavLink to='/music' className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
        </li>
        <li className={s.item}>
            <NavLink to='/settings'className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
        </li>
    </ul>

        <div className={s.friendsBannner}>
            <div>
                <FriendListVidget  friendList = {props.friendList}/>
            </div>
        </div>
    </nav>
}

export default Navbar