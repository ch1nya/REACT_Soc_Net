import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
// import {combineReducers, createStore} from "redux"

import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"
import usersReducer from "./usersReducer"
import authReducer from "./authReducer"
import thunkMiddleware from 'redux-thunk'
import appReducer from "./appReducer"
import {reducer as formReducer} from 'redux-form'

let reducesers = combineReducers({
    profile : profileReducer,  
    dialogs : dialogsReducer,  
    sidebar : sidebarReducer,
    users: usersReducer, 
    auth: authReducer,
    form: formReducer,
    app: appReducer

})

let store = createStore(reducesers, applyMiddleware(thunkMiddleware))

// window.store = store
export default store