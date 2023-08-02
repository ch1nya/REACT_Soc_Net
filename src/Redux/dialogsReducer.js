const DIALOGS_ADD_MESSAGE = "DIALOGS-ADD-MESSAGE"
const DIALOG_UPDATE_MESSAGE = 'DIALOG-UPDATE-MESSAGE'

const dialogsReducer = (state, action) => {
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