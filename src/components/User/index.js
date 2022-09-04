import React, {useContext} from "react";
import { ContextUser } from "store/context";
import ProfilePhoto from "components/ProfilePhoto";

const User = () => {
    const {user, setUser} = useContext(ContextUser)
    return (
        <>
            <h2>{user?.name}</h2>
            <ProfilePhoto sprites={user?.sprites}/>
        </>
    )
}

export default User;
