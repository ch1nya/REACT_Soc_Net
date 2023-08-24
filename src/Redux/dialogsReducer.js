const DIALOGS_ADD_MESSAGE = "DIALOGS-ADD-MESSAGE"

 let initialState = {
  dialogs : [
        {id: 1, name:'Ivan' ,avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRtzTlO5KRSzZ67XMGm2DTq_5fmxVhcsm1cw&usqp=CAU'}, 
        {id: 2, name:'Helen',avatar:'https://i.etsystatic.com/38695703/r/il/f65f5c/4503343013/il_fullxfull.4503343013_kdw1.jpg'}, 
        {id: 3, name:'Dron' ,avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTraCCbsJgrDL_kgCO1chAroGr2KPPwWmVtEw&usqp=CAU'},
        {id: 4, name:'Marta',avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnvie5SwbhhA5YJXKqRDDOlsWvlA2Sz81UQ&usqp=CAU'},
        {id: 5, name:'Dima' ,avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VgouGIj5sFWwhEycB1euuynhs5Cvt1NsMA&usqp=CAU'},
        {id: 6, name:'Alex' ,avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ukvUsooi5M8QMU0jGJagEF824N_DbpAxHg&usqp=CAU'},
        {id: 7, name:'Hehe' ,avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRo6oRGkD1T75-wJCMY5ObXIoL3OkSCo0N7g&usqp=CAU'},
      ],
    messages : [
        {id: 1, message:'Hey'   }, 
        {id: 2, message:'Sup'   }, 
        {id: 3, message:'Wag1'  },
        {id: 4, message:'Wag!!!!'  },
        {id: 5, message:'LOL'  }
      ]
 }

const dialogsReducer = (state = initialState, action) => {
  let stateCopy = {...state}
  switch (action.type){
    case DIALOGS_ADD_MESSAGE:{     
      let newMessage = action.newMessageBody
      return {
        ...state,
        messages: [...state.messages, {id:6,message: newMessage}]
      }
      }
    default:
      return state
}
}

export const addMessageActionCreate = (newMessageBody) => {
  return {
    type: DIALOGS_ADD_MESSAGE,
    newMessageBody 
  }
}

    
export default dialogsReducer