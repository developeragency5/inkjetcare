import React from 'react'
import { Link } from 'react-router-dom'; 
function Nav() {
  return (
    <div className="main">
        <div className="head-div">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2 className="main-heading">InkJetCare</h2>
          </Link>
        </div>
        <div className='sec-div'></div>
      </div>
  )
}

export default Nav
