import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { auth, setAuthUserData } from "../../Redux/authReducer";
import { usersAPI } from "../../apiFolder/API";


class HeaderContainer extends React.PureComponent {
    componentDidMount() {
        this.props.auth()
    }

    render() {
        return <Header {...this.props} />

    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, { setAuthUserData, auth })(HeaderContainer)