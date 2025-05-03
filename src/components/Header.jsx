import { HEADER_LOGO_URL } from "../utils/constants";

const Header = () => (
    <div className='header'>
        <div className='logo-container'>
            <img className='logo' src={HEADER_LOGO_URL} />
        </div>
        
        <div className='nav-bar'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);


export default Header;