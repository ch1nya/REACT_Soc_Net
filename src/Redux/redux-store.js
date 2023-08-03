    import {combineReducers, legacy_createStore as createStore} from "redux"
import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

let reducesers = combineReducers({
    dialogs : dialogsReducer,  
    profile : profileReducer,  
    sidebar : sidebarReducer,  

})

let store = createStore(reducesers)

export default store