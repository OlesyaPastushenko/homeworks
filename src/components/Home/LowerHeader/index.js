import React, {useEffect, useContext} from "react";
import './style.scss'
import '../../../fonts/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4taVIGxA (1).woff2'
import logo from './Logo.jpg'
import {Link} from 'react-router-dom'
import {ContextuserBasket} from "../../../store/context";

const LowerHeader = () => {
    const onContactUs = () => {
        scroll(0,document.body.clientHeight)
    }
    const { userBasket, setUserBasket } = useContext(ContextuserBasket)
    return (
        <div className="recWhite">
            <div className="navbar">
                <div className="logo_links">
                    <Link to='/' className = "a">
                    <img src={logo} className="logo"/>
                    </Link>
                    <ul className="lowerHeader">
                        <li>
                            <Link to='/' className = "a navlinks">Principal</Link>
                        </li>

                        <li>
                            <Link to='/catalogue' className = "a navlinks">Búsqueda de Inmuebles</Link>
                        </li>
            
                        {/* <li>
                            <Link to = '/basket' className = "a navlinks favoritas">Mis favoritos
                            <div className="eticket">
                            {userBasket.length}
                            </div>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            <button onClick={onContactUs} className="button_header">
             Contact us
            </button>
            </div>
        </div>
    )
}

export default LowerHeader;