import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import ProfileContainer from "./Components/Profile/ProfileItSelf/ProfileContainer";
import Navbar from "./Components/Navbar/Navbar"; 
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";





const App = (props) => {

    return (
        <Router>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar
                // friendList={props.state.sidebar.friendList}\
                />

                <div className='app-wrapper-content'>
                    <Routes>

                        {/* <Route path='/profile/*' element={<ProfileContainer />} /> */}

                        <Route path="/profile/:userId?" element={<ProfileContainer />}/>


                        <Route path='/messages/*'
                            element={<DialogsContainer />} />
                        <Route path='/users'
                            element={<UsersContainer />} />
                    </Routes>
                </div>

            </div>
        </Router>
    )
}


export default App;
