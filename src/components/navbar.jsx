import React from 'react'
import "../style/navbar.css"
import { Link } from 'react-router-dom'


export default function Navb() {
  return (
    <div className="App">

      <nav className="Navbar">
        <ul>
          <li>
            <Link to="/">/</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
    )

}
