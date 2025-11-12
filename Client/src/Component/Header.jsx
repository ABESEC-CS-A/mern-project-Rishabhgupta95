import {nav} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <nav style={{ display: 'flex', gap: '3rem', padding: '1rem',backgroundColor:'red'}}>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/help">Help</Link>
           <Link to="/viewcart">ViewCart</Link>
           <Link to="/vieworder">ViewOrder</Link>
        </nav>
    </div>
  );
};

export default Header;