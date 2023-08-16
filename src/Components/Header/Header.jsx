import React from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
            <img src="https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Логотип"/>
            <div className={s.loginBlock}>
                {props.isAuth 
                    ? props.login
                    : <NavLink to={'/login'}><a>Login</a></NavLink>} 
                
            </div>
            </header>
}

export default Header