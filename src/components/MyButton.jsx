import React, { useState } from "react";
import '../App.css'
const MyButton = ({children, ...props}) =>{
    return (
        <button {...props} className='button'>{children}</button>
    )

}
export default MyButton