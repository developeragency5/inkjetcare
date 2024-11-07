import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import icon from '../assets/X.png'

const Navbar = () => {
  return (
    <div className="main">
      <div className="head-div">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h2 className="main-heading">Inkjetcare</h2>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
