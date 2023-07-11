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

let dialogs = [
    {id: 1, name:'Ivan'  }, 
    {id: 2, name:'Helen' }, 
    {id: 3, name:'Dron'  },
    {id: 4, name:'Marta' },
    {id: 5, name:'Dima'  },
    {id: 2, name:'Alex'  },
    {id: 2, name:'Hehe'  },
]

let messages = [
    {id: 1, message:'Hey'   }, 
    {id: 2, message:'Sup'   }, 
    {id: 3, message:'Wag1'  },
    {id: 3, message:'Wag!!!!'  },
    {id: 3, message:'LOL'  }
]


let dialogElements = dialogs.map(d=> <DialogItem name ={d.name}  id={d.id} />)

let messagesElements = messages.map(m => <Message message={m.message} />)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs