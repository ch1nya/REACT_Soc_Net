import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import Profile from "./Components/Profile/ProfileItSelf/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";





const App = (props) => {

    return (
        <Router>
            <div className='app-wrapper'>
                <Header />
                <Navbar
                // friendList={props.state.sidebar.friendList}\
                />

                <div className='app-wrapper-content'>
                    <Routes>

                        <Route path='/profile'
                            element={<Profile />} />
                        <Route path='/messages/*'
                            element={<DialogsContainer />} />
                        <Route path='/users'
                            element= {<UsersContainer/>} />
                    </Routes>
                </div>

            </div>
        </Router>
    )
}


export default App;
