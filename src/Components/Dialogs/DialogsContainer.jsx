
import { addMessageActionCreate, updateNewMessageActionCreate } from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import { compose } from "redux";
import WithAuthRedirect from "../hoc/WithAuthRedirect";






let  mapStateToProps = (state) =>{
    return {
        dialogs: state.dialogs, 
    }
}
let  mapDispatchToProps = (dispatch) =>{ 
    return {
        addMessage : ()=> {
            dispatch(addMessageActionCreate())
    },
    updateNewMessage : (text)=> {
        let action = updateNewMessageActionCreate(text) 
        dispatch(action)
    }
    }
}
//                 ↓after
// const AuthRedirectComponent = (props) =>{
//     if (!this.props.isAuth){
//         return <Navigate to="/login"/>
//     }  
//   return   <Dialogs {...props} />
// }
//              ↓after better version
// let AuthRedirectComponent = WithAuthRedirect(Dialogs)
//                                                                   ↓replaced Dialogs with AuthRedirectComponent
//                                                                   ↓replaced AuthRedirectComponent with WithAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)
//                                                                   ↓replaced the constructure above to a short compose function 
export default compose(connect(mapStateToProps,mapDispatchToProps),WithAuthRedirect)(Dialogs)