import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { addMessageActionCreate, updateNewMessageActionCreate } from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";





const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>{(store) => {
            let state = store.getState().dialogs

            let addMessageButton = () => {
                store.dispatch(addMessageActionCreate())
            }

            let onMessageChange = (text) => {
                // let body = text.target.value
                store.dispatch(updateNewMessageActionCreate(text))
                // props.store.dispatch(updateNewMessageActionCreate(text))
            }

            return <Dialogs
                updateNewMessage={onMessageChange}
                addMessage={addMessageButton}
                state={state} />
        }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer