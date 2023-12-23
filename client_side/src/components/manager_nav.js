import React from 'react'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import '../styles/nav.css'

function Nav() {
  return (
    <>
    <div className='hn_main'>
      <div className='hn_sub'>
        <div>
          <Link to='/playerlist' className='hn_link'>Players List</Link>
          <button className='hn_but'>Manager</button>
          <button className='hn_but'>How To Win?</button>
        </div>
        <div>
          <Link to='/about' className='hn_link'>About</Link>
          <Link to='/feedback' className='hn_link'></Link>
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