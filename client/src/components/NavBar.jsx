
import React from 'react';
import { Link } from 'react-router-dom';

const styles= {
  navBar: {
backgroundColor: "none"
  }
};

const NavBar = () => {
  return (
    <nav style={styles.navBar}>
      <div className="nav-btn">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-btn">
        <Link to="/about">About</Link>
      </div>
      <div className="nav-btn">
        <Link to="/contact">Contact</Link>
      </div>
      <div className="nav-btn">
        <Link to="/game">Game</Link>
      </div>
    </nav>
  );
};

export default NavBar;
