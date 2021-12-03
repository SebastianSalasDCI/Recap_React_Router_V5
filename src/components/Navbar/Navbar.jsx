import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <div>
        Router Demo Page
      </div>
      <ul className="nav-list" >
        <li> <NavLink to="/" exact activeClassName="active" >Landing</NavLink> </li>
        <li> <NavLink to="/aboutus" activeClassName="active" >About us</NavLink> </li>
        <li> <NavLink to="/cats/1" activeClassName="active" >Cats</NavLink> </li>
        <li> <NavLink to="/dogs" activeClassName="active" >Dogs</NavLink> </li>
      </ul>
    </nav>
  )
}
