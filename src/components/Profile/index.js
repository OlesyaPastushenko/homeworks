import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';


const Profile = () => {
    let upath = useSelector(state=>state.auth) 
    let uname = useSelector(state=>state.username)

    
    return  upath == '/profile' ? (
         <div>  
                <h1>Profile</h1>
                <h2>Hello {uname}!</h2>

         </div>
    ) :
    (
        <Navigate to = '/login'></Navigate>
    )
}

export default Profile;