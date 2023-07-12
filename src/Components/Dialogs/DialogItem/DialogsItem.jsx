import React,{ useRef } from "react";
import { NavLink } from "react-router-dom";
import s from './DialogsItem.module.css'

const DialogItem = (props) => {
    return(
        <div className={s.dialog + ' ' + s.active}>
            <div className={s.avatar} >
                <img  src={props.avatar}></img>
            </div>
                <NavLink to ={"/dialog/" + props.id}>{props.name}</NavLink>
        </div>            
    )
}

export default DialogItem