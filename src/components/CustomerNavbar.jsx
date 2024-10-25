import React from 'react'
import './CustomerNavbar.css'
import { Link } from 'react-router-dom'

export const CustomerNavbar = () => {
  return (
    <div><div className="main">
    <div className="head-div">
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h2 className="main-heading">Customer Service and Support</h2>
      </Link>
    </div>
  </div></div>
  )
}
