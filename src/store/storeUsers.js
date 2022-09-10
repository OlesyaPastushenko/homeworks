import {createStore} from 'redux'
const defaultState ={
    username: "",
    userpassword: "",
    auth: '/login'
}
const reduserUser = (state = defaultState, action) => {
switch(action.type) {
    case 'ADD_USER':
        return {...state, username: action.payload }
    case 'ADD_PASSWORD':
        return {...state, userpassword: action.payload}
    case 'CHECK_USER':
        return {...state, auth: action.payload }
    default:
        return state 
  
}
}
const store = createStore(reduserUser)
export default store 




