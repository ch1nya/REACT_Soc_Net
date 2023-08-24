import React, { useRef } from "react";
import Profile from "./Profile";
import { getUserProfile } from "../../../Redux/profileReducer";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import WithAuthRedirect from "../../../hoc/WithAuthRedirect";
import { compose } from "redux";
import { getStatus, updateStatus } from "../../../Redux/profileReducer";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 29891;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }


  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}
let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);
let mapStateToProps = (state) => ({
  profile: state.profile.profile,
  status: state.profile.status,
});


export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  WithAuthRedirect
)(ProfileContainer);
