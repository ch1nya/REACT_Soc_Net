import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { addMessageActionCreate, updateNewMessageActionCreate } from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";







let  mapStateToProps = (state) =>{
    return {
        dialogs: state.dialogs,
    }
}
let  mapDispatchToProps = (dispatch) =>{ 
    return {
        addMessage : ()=> {
            dispatch(addMessageActionCreate())
    },
    updateNewMessage : (text)=> {
        let action = updateNewMessageActionCreate(text) 
        dispatch(action)
    }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer