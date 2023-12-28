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
          <Link to='/playerlist' className='hn_link'>Player List</Link>
          <Link to='/about' className='hn_link'>Teams</Link>
          <Link to='/about' className='hn_link'>Players</Link>
        </div>
        <div>
          <Link to='/about' className='hn_link'>Password?</Link>
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