import React, {useEffect, useContext} from "react";
import './style.scss'
import basket from './pngwing.png'
import {Link} from 'react-router-dom'
import {ContextuserBasket} from "../../../store/context";

const LowerHeader = () => {
    const { userBasket, setUserBasket } = useContext(ContextuserBasket)
    return (
        <div className="recWhite">
            <div className="leo">LEO SHOP
            </div>
            <ul className="lowerHeader">
                <li>
                    <Link to='/' className = "a">ГЛАВНАЯ</Link>
                </li>

                <li>
                    <Link to='/catalogue' className = "a">КАТАЛОГ</Link>
                </li>
     
                <li>
                    <Link to = '/basket' className = "a">КОРЗИНА</Link>
                </li>
            </ul>
            <div className="wrap3">
            <input type='text' placeholder="Search"></input>
            <div className="basket">
                <img src = {basket} width = {25}/>
            </div>
            <div className="eticket">
            {userBasket.length}
            </div>
            </div>

        
        </div>
    )
}

export default LowerHeader;