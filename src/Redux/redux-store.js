import {combineReducers, legacy_createStore as createStore} from "redux"
// import {combineReducers, createStore} from "redux"

import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"


let reducesers = combineReducers({
    profile : profileReducer,  
    dialogs : dialogsReducer,  
    sidebar : sidebarReducer,  

})

let store = createStore(reducesers)

// window.store = store
export default store