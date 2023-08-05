import {combineReducers, legacy_createStore as createStore} from "redux"
// import {combineReducers, createStore} from "redux"

import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"


const reducers = combineReducers({
    profile : profileReducer,
    dialogs : dialogsReducer,
    sidebar : sidebarReducer,
})

const store = createStore(reducers)
export default store
