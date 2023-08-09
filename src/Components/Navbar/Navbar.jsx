import React from "react";
import s from './Navbar.module.css'
import { NavLink } from "react-router-dom";
import NavbarFriendsBlock from "./NavbarFriendsBlock/NavbarFriendsBlock";


const Navbar = (props) => {


   return <nav className={s.nav}>
    <ul>
        <li className={s.item}>
            <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
        </li>
        <li className={s.item}>
            <NavLink to='/messages' className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
        </li>
        <li className={s.item}>
            <NavLink to='/users' className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink>
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
{/* 
        <div className={s.NavbarFriendsBlock}>
               <NavbarFriendsBlock friendList={props.friendList} />
        </div> */}
    </nav>
}

export default Navbar