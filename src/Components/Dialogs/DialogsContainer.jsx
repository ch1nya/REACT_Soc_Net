import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { addMessageActionCreate, updateNewMessageActionCreate} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";





const DialogsContainer = (props) => {
    let  state = props.store.getState().dialogs

    let addMessageButton = () => {
        props.store.dispatch(addMessageActionCreate())
    }

    let onMessageChange = (text) => { 
        // let body = text.target.value
        props.store.dispatch(updateNewMessageActionCreate(text))
        // props.store.dispatch(updateNewMessageActionCreate(text))
    }

     
    return (
        <Dialogs 
            updateNewMessage={onMessageChange}
            addMessage={addMessageButton}
            state = {state}/>
    )
}

export default DialogsContainer