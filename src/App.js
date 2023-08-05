import React, {useRef} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css"
import Profile from "./Components/Profile/ProfileItSelf/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Dialogs from "./Components/Dialogs/Dialogs";


const App = (props) => {
    return (
        <Router>
            <div className='app-wrapper'>
                <Header/>
                <Navbar
                    // friendList={props.state.sidebar.friendList}\
                />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile
                                   state={props.state}
                                   dispatch={props.dispatch}
                               />}/>
                        <Route path='/messages/*'
                               element={<Dialogs
                                   state={props.state}
                                   dispatch={props.dispatch}
                               />}/>
                    </Routes>
                </div>

            </div>
        </Router>
    )
}


export default App;
