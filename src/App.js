import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfileContainer from "./Components/Profile/ProfileItSelf/ProfileContainer";
import Navbar from "./Components/Navbar/Navbar";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./Redux/appReducer";
import { compose } from "redux";
import Preloader from "./CommonComponents/Preloader";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      debugger
        return <Preloader />;
    }   

    return (
      <Router>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar
          // friendList={props.state.sidebar.friendList}\
          />

          <div className="app-wrapper-content">
            <Routes>
              <Route path="/profile/:userId?" element={<ProfileContainer />} />
              <Route path="/messages/*" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({ initialized: state.app.initialized });

export default compose(connect(mapStateToProps, { initializeApp }))(App);
