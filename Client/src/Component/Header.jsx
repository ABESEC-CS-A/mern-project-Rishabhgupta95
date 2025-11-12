import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f3f3f3' }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/help">Help</Link>
    </div>
  );
};

export default Header;