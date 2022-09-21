import React, {useEffect, useContext} from "react";
import './style.scss'
import basket from './c3b2dff7986e701847f213423683f00a.png'
import {Link} from 'react-router-dom'
import {ContextuserBasket} from "../../../store/context";

const LowerHeader = () => {
    const { userBasket, setUserBasket } = useContext(ContextuserBasket)
    return (
        <div className="recWhite">
            <Link to='/' className = "a">
            <div className="leo">Casa Murciana
            </div></Link>
            <ul className="lowerHeader">
                <li>
                    <Link to='/' className = "a">Principal</Link>
                </li>

                <li>
                    <Link to='/catalogue' className = "a">Todos inmuebles</Link>
                </li>
     
                <li>
                    <Link to = '/basket' className = "a">Mis favoritos</Link>
                </li>
            </ul>
            <div className="wrap3">
            <Link to = '/basket' className = "a">
            <div className="basket">
                <img src = {basket} width = {20}/>
            </div>
            <div className="eticket">
            {userBasket.length}
            </div>
            </Link>
            </div>

        
        </div>
    )
}

export default LowerHeader;