import React from 'react'
import './Nav.scss'
import MenuIcon from '../MenuIcon/MenuIcon';
import SectionLine from '../SectionLine/SectionLine';

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
          <nav className="navbar-contents">
            <h1>logo.</h1>
            <MenuIcon/>
          </nav>
      </div>
    </div>
    
  )
}

export default Nav;