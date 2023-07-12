import React, { useRef } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css"
import Profile from "./Components/Profile/ProfileItSelf/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Dialogs from "./Components/Dialogs/Dialogs";



debugger; 

const App = (props) => {
    
    
    return (
        <Router>
            <div className='app-wrapper'>
                <Header />          

                <Navbar friendList = {props.state.sidebar.friendList}/>
                
                <div className='app-wrapper-content'>
                    <Routes>
                        {/* <Route  path='/profile' element={<Profile />}/>
                        <Route path='/messages/*'  element={<Dialogs />}/> */}

                        <Route  path='/profile' element = { <Profile posts={props.state.profilePage.posts} />}/>
                        <Route path='/messages/*' element = { <Dialogs 
                                                                        dialogs={props.state.dialogsPage.dialogs} 
                                                                        messages={props.state.dialogsPage.messages}
                                                                        avatar={props.state.dialogsPage.avatar}
                                                                        />}/>
                    </Routes>
                </div>

            </div>
        </Router>
    )
}


export default App;
