import React, { useRef } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css"
import Profile from "./Components/Profile/ProfileItSelf/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Dialogs from "./Components/Dialogs/Header/Dialogs";



const App = () => {
    return (
        <Router>
            <div className='app-wrapper'>
                <Header />          

                <Navbar />

                
                <div className='app-wrapper-content'>
                {/* <Dialogs /> */}
                    <Routes>
                        <Route  path='/profile' element={<Profile />}/>
                        <Route path='/messages/*'  element={<Dialogs />}/>
                    </Routes>
                    {/* <Profile /> */
                    /* <Dialogs /> */}
                </div>

            </div>
        </Router>
    )
}


export default App;
