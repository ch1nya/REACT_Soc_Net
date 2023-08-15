import {combineReducers, legacy_createStore as createStore} from "redux"
// import {combineReducers, createStore} from "redux"

import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"
import usersReducer from "./usersReducer"
import authReducer from "./authReducer"


let reducesers = combineReducers({
    profile : profileReducer,  
    dialogs : dialogsReducer,  
    sidebar : sidebarReducer,
    users: usersReducer, 
    auth: authReducer

})

let store = createStore(reducesers)

// window.store = store
export default store