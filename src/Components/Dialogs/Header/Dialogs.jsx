import React,{ useRef } from "react";
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to ={"/dialog/" + props.id} >{props.name}</NavLink>
        </div>            
    )
}

const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem name ="Ivan"  id="1" />            
                <DialogItem name ="Helen" id="2" />
                <DialogItem name ="Dron"  id="3" />
                <DialogItem name ="Marta" id="4" />
                <DialogItem name ="Dima"  id="5" />
                <DialogItem name ="Alex"  id="6" />
                <DialogItem name ="Hehe"  id="7" />
            </div>
            <div class4ame={s.messages}>
                <Message message='Hey' />
                <Message message='Sup' />
                <Message message='Wag1' />
            </div>
        </div>
    )
}

export default Dialogs