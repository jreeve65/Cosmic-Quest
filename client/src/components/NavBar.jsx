
import React from 'react';
import { Link } from 'react-router-dom';

const styles= {
  navBar: {
backgroundColor: "none"
  },
  right:{
alignItems:"right"
  }
};

const NavBar = () => {
  return (
    <>
    <nav style={styles.navBar}>
      <div className="nav-btn">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-btn">
        <Link to="/about">About</Link>
      </div>
      <div className="nav-btn">
        <Link to="/stripe">Tip Us</Link>
      </div>
      <div className="nav-btn">
        <Link to="/gamecq">Game</Link>
      </div>
    </nav>
    </>
  );
};

export default NavBar;
