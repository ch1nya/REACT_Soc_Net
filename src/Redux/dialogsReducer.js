const DIALOGS_ADD_MESSAGE = "DIALOGS-ADD-MESSAGE"
const DIALOG_UPDATE_MESSAGE = 'DIALOG-UPDATE-MESSAGE'

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
      ],
      newMessageText: 'newMessageText from state.DialogPage'
 }

const dialogsReducer = (state = initialState, action) => {
  switch (action.type){
    case DIALOGS_ADD_MESSAGE:
       let newMessage = {
          id: 6, 
          message: state.newMessageText}
      state.messages.push(newMessage)
      state.newMessageText = ''
      return state
    case DIALOG_UPDATE_MESSAGE:
      state.newMessageText = action.newText 
      return state
    default:
      return state
}
}

export const addMessageActionCreate = () => {
  return {
    type: DIALOGS_ADD_MESSAGE
  }
}
export const updateNewMessageActionCreate = (text) => {
  return {
      type: DIALOG_UPDATE_MESSAGE,
      newText: text
  }
}
    
export default dialogsReducer