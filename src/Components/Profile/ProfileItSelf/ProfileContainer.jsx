import React, { useRef } from "react";
import Profile from "./Profile";
import { getUserProfile } from "../../../Redux/profileReducer";
import { connect } from "react-redux";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";

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
        if (!userId) { userId = 2 }
        this.props.getUserProfile(userId)
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}


let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)



let mapStateToProps = (state) => ({
    profile: state.profile.profile,

})


export default connect(mapStateToProps, { getUserProfile })(withRouter(AuthRedirectComponent))
