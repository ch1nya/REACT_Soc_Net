import React from "react";
import Header from "./Header";
import { logout } from "../../Redux/authReducer";
import { connect } from "react-redux";
import { getAuthUserData } from "../../Redux/authReducer";


class HeaderContainer extends React.PureComponent {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />

    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer)