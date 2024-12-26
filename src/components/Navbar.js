import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>หน้าหลัก</Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>เกี่ยวกับเรา</Link>
      <Link to="/courses" style={{ color: 'white', textDecoration: 'none' }}>หลักสูตร</Link>
      <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>ติดต่อเรา</Link>
    </nav>
  );
}

export default Navbar;