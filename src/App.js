import React, { useRef } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css"
import Profile from "./Components/Profile/ProfileItSelf/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Dialogs from "./Components/Dialogs/Dialogs";





const App = (props) => {
    debugger
    return (
        <Router>
            <div className='app-wrapper'>
                <Header />          
                <Navbar 
                // friendList={props.state.sidebar.friendList}\
                />
                
                <div className='app-wrapper-content'>
                    <Routes>

                        <Route  path='/profile' 
                                element = {<Profile 
                                            store={props.store}
                                                    />}/>
                        <Route path='/messages/*' 
                               element = { <Dialogs 
                                            store={props.store} 
                                            />}/>
                    </Routes>
                </div>

            </div>
        </Router>
    )
}


export default App;
