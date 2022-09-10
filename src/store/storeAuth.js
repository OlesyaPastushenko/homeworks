const defaultState ={
    auth: false
}
const reduserAuth = (state = defaultState, action) => {
switch(action.type) {
    case 'CHECK_USER':
        return {...state, auth: action.payload }
    default:
        return state 
  
}
}