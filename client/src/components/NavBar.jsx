
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
        <Link to="/contact">Contact</Link>
      </div>
      <div className="nav-btn">
        <Link to="/game">Game</Link>
      </div>

<div id='stripe' className='nav-btn'>
<div style={styles.right}>
<Link to="https://buy.stripe.com/7sI01I6jx8Hx4mc288">Tip Us</Link>
</div>
</div>
    </nav>
    </>
  );
};

export default NavBar;
