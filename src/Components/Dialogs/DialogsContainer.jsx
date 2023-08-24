
import { addMessageActionCreate } from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import { compose } from "redux";


let  mapStateToProps = (state) =>{
    return {
        dialogs: state.dialogs, 
    }
}
let  mapDispatchToProps = (dispatch) =>{ 
    return {
        addMessage : (newMessageBody)=> {
            dispatch(addMessageActionCreate(newMessageBody))
    }  }
}
export default compose(connect(mapStateToProps,mapDispatchToProps),WithAuthRedirect)(Dialogs)