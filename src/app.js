import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import News from "./components/News";
import Profile from "./components/Profile";
import ErrorPage from "./components/errorPage";


const App = () => {
    const dispatch = useDispatch;
    let username = useSelector(state=>state.username) 
    let userpassword = useSelector(state=>state.userpassword)
    useEffect(()=> {
        const admin = {
            username: 'Admin',
            password: '12345',
        }
        localStorage.setItem('user', JSON.stringify(admin))
    },[])


    return (
         <div>  
            <Navigation/>
         <Routes>
            <Route exect path = '/' element = {<Home/>} />
            <Route exect path = '/login' element = {<Login/>} />
            <Route exect path = '/news' element = {<News/>} />
            <Route exect path = '/profile' element = {<Profile/>} />
            <Route exect path = '*' element = {<ErrorPage/>} />
         </Routes>
         </div>
    )
}

export default App;
