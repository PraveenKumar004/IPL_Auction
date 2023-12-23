import React from 'react'
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Popup from './popup'
import '../styles/nav.css'

function Nav() {
  const [popup,setpopup]=useState(false);
  const [popup2,setpopup2]=useState(false);
  return (
    <>
    <div className='hn_main'>
      <div className='hn_sub'>
        <div>
          <Link to='/' className='hn_link' onClick={()=>{setpopup(false) ; setpopup2(false)}}>Home</Link>
          <Link to='/playerlist' className='hn_link'  onClick={()=>{setpopup(false) ; setpopup2(false)}}>Players List</Link>
          <button className='hn_but' onClick={()=>{setpopup(true) ; setpopup2(false)}}>How To Play?</button>
          <button className='hn_but' onClick={()=>{setpopup(false) ; setpopup2(true)}}>How To Win?</button>
        </div>
        <div>
          <Link to='/about' className='hn_link' onClick={()=>{setpopup(false) ; setpopup2(false)}}>About</Link>
          <Link to='/feedback' className='hn_link' onClick={()=>{setpopup(false) ; setpopup2(false)}}>Feedback</Link>
        </div>
      </div>
    </div>
    <div>
    <Outlet/>
    <Popup open={popup} close={()=>setpopup(false)}>
      <div><h>Intern Details Addded</h></div>
      <div><h>Intern Details Addded</h></div>
      <div><h>Intern Details Addded</h></div>
      <div><h>Intern Details Addded</h></div>
    </Popup>
    <Popup open={popup2} close={()=>setpopup2(false)}>
      <h>Intern Details Addded 2</h>
      <h>Intern Details Addded 2</h>
      <h>Intern Details Addded 2</h>
      <h>Intern Details Addded 2</h>
    </Popup>
    </div>
    </>
  )
}

export default Nav;