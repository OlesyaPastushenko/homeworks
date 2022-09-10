import { Link } from "react-router-dom";
import './style.scss'
import { useSelector } from "react-redux";


const Navigation = () => {
    let upath = useSelector(state=>state.auth) 

    
    return (
         <div>  
                <nav className="nav">
            <div>
                HW React Redux
            </div>
                    <ul className="homeUl">
                        <li className="homeli">
                            <Link className="homeli" to='/'>Home</Link>
                        </li>
                        <li className="homeli">
                            <Link className="homeli" to='/news'>News</Link>
                        </li>
                        <li className="homeli">
                            <Link className="homeli" to = {upath}>Profile</Link>
                        </li>
                    </ul>
                </nav>
         </div>
    )
}

export default Navigation;
