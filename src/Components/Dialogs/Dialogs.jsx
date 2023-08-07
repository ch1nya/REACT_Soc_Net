import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { addMessageActionCreate, updateNewMessageActionCreate} from "../../Redux/dialogsReducer";






const Dialogs = (props) => {
let dialogElements = props.dialogs.dialogs.map(d=> <DialogItem 
        name ={d.name}  
        id={d.id}
        avatar={d.avatar}/>)

let messagesElements = props.dialogs.messages.map(m => <Message message={m.message} />)

let newMessageElement = React.createRef()

let addMessageButton = () => {
props.addMessage()}

let onMessageChange = (text) => {
    let body = text.target.value 
    props.updateNewMessage(body)}
debugger
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                <p className={s.message}>{messagesElements}</p>
                <textarea 
                ref={newMessageElement}
                value={props.dialogs.newMessageText}
                onChange={onMessageChange}
                ></textarea>
                <div>
                    <button 
                    className={s.addMessageButton} 
                    type="submit"
                    onClick={addMessageButton}
                    
                    >Add Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs