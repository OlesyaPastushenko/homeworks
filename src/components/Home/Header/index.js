import './style.scss'
const Header = () => {
    return (
        <div className="rec">
            <div>
                <label>Language:</label>
                <select>
                    <option>English</option>
                    <option>Spanish</option>
                </select>
                <label>Currency:</label>
                <select>
                    <option>USD</option>
                    <option>UHR</option>
                </select>
            </div>
            <ul className="upperHeader">
                <li>
                    <a href="">Account </a>
                </li>
                    <div>|</div>
                <li>
                    <a href="">Wishlist </a>
                </li>
                <div>|</div>
                <li>
                    <a href="">CheckOut </a>
                </li>
                <div>|</div>
                <li>
                    <a href="">LogIn </a>
                </li>
                <div>|</div>
                <li>
                    <a href="">SignUp</a>
                </li>
            </ul>

        
        </div>
    )
}

export default Header;
