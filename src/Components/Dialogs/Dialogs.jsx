import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { addMessageActionCreate, updateNewMessageActionCreate} from "../../Redux/dialogsReducer";






const Dialogs = (props) => {
    let dialogElements = props.DialogsPage.dialogs.map(d=> <DialogItem 
                                                name ={d.name}  
                                                id={d.id}
                                                avatar={d.avatar}/>)

    let messagesElements = props.DialogsPage.messages.map(m => <Message message={m.message} />)
    
    let newMessageElement = React.createRef()

    let addMessageButton = () => {
        props.dispatch(addMessageActionCreate())

    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.dispatch(updateNewMessageActionCreate(text))
    }
    
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                <p className={s.message}>{messagesElements}</p>
                <textarea 
                ref={newMessageElement}
                value={props.DialogsPage.newMessageText}
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