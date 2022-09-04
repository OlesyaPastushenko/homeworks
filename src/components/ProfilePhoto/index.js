import React from "react"
import {defaultUser} from "helpers/constants";

const ProfilePhoto = ({ sprites = defaultUser.sprites }) => {
    return <img className='profile-photo' width={50} src={sprites?.front_default} alt=""/>
}

export default ProfilePhoto
