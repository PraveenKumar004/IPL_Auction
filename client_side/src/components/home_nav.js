import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../styles/nav.css'

function Nav() {
  return (
    <>
    <div className='hn_main'>
      <div className='hn_sub'>
        <div>
          <Link to='/' className='hn_link'>Home</Link>
          <Link to='/playerlist'className='hn_link'>Players List</Link>
          <Link to='/playerlist'className='hn_link'>How to Play ?</Link>
          <Link to='/playerlist'className='hn_link'>How to Win ?</Link>
        </div>
        <div>
          <Link to='/about' className='hn_link'>About</Link>
          <Link to='/feedback' className='hn_link'>Feedback</Link>
        </div>
      </div>
    </div>
    <div>
    <Outlet/>
    </div>
    </>
  )
}

export default Nav;