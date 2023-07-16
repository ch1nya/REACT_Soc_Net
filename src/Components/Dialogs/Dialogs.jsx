import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { updateMessageBodyCreator, sendMessageCreator } from "../../Redux/state";







const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;
    let dialogElements = props.dialogs.map(d=> <DialogItem 
                                                name ={d.name}  
                                                id={d.id}
                                                avatar={d.avatar}
                                                />)
    let messagesElements = props.messages.map(m => <Message message={m.message} />)
    let newMessageBody = props.state.newMessageBody;
    let onNewMessageChange = (event) => {
        let body =  event.target.value;
        props.store.dispatch(updateMessageBodyCreator(body))  
    };
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };
    
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea  value={newMessageBody} 
                                    placeholder='Enter your message'
                                    onChange={onNewMessageChange}>

                                    </textarea>
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs