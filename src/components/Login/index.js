import './style.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const Login = () => {
const [userName, setUserName] = useState('')
const [userPassword, setUserPassword] = useState('')

const dispatch = useDispatch();
let storageUser = JSON.parse(localStorage.getItem("user"))
let upath = useSelector(state=>state.auth) 



const onRegister = (enteredName, enteredPassword) => {
    return (
        dispatch({
            type: 'ADD_USER',
            payload: enteredName
        }),
        dispatch({
            type: 'ADD_PASSWORD',
            payload: enteredPassword
        }),
        storageUser.username !== enteredName || storageUser.password !== enteredPassword ? alert("Не верное имя или пароль") : 
        dispatch({
            type: 'CHECK_USER',
            payload: '/profile'
        }),
        setUserName(''),
        setUserPassword ('')

    )
}

    return (
         <div>  
                <h1 className="h1Home">Registration</h1>
                <div className="divLogin">
                <input placeholder = 'Name' value = {userName} onChange={(e)=>setUserName(e.target.value)} type='text'></input>
                <input placeholder = 'Password' value = {userPassword} onChange={(e)=>setUserPassword(e.target.value)} type='text'></input>
                <button onClick={()=> onRegister(userName, userPassword) }>
                    <Link  to = '/profile' >Log In</Link>
                </button>
                </div>
         </div>
    )
}

export default Login;