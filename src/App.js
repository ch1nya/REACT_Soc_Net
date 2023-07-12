import React, { useRef } from "react";
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
                <Header />          

                <Navbar />
                
                <div className='app-wrapper-content'>
                    <Routes>
                        {/* <Route  path='/profile' element={<Profile />}/>
                        <Route path='/messages/*'  element={<Dialogs />}/> */}

                        <Route  path='/profile' render={() => <Profile posts={props.posts} />}/>
                        <Route path='/messages/*' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    </Routes>
                </div>

            </div>
        </Router>
    )
}


export default App;
