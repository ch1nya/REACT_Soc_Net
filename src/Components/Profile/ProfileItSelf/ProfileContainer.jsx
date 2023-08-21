import React, { useRef } from "react";
import Profile from "./Profile";
import { getUserProfile } from "../../../Redux/profileReducer";
import { connect } from "react-redux";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import WithAuthRedirect from "../../../hoc/WithAuthRedirect";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />);
    }
    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId){userId = 2}
        this.props.getUserProfile(userId)
    }
    
    render() {
        // if (!this.props.isAuth){
        //     return <Navigate to="/login"/>
        // }             before 
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}
// ↓ after 
// const AuthRedirectComponent = (props) =>{
//     if (!this.props.isAuth){
//         return <Navigate to="/login"/>
//     }  
//   return   <ProfileContainer {...props} />
// }
// ↓ after but better 
let AuthRedirectComponent =WithAuthRedirect(ProfileContainer)
let mapStateToProps = (state) => ({
    profile: state.profile.profile,
})

// ↓ added functinality to check auth status here and then replaced that to HOC to check it inside the HOC
// let mapStateToPropsForRedirect = (state) => ({
//     isAuth: state.auth.isAuth
// })
// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent) 

//                                                          ↓replaced ProfileContainer with AuthRedirectComponent
//                                                          ↓replaced AuthRedirectComponent with WithAuthRedirect(ProfileContainer)
export default connect(mapStateToProps, { getUserProfile })(withRouter(AuthRedirectComponent))
