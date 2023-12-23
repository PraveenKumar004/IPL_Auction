import React from 'react'
import '../styles/nav.css'

const popup = ({open,children,close,head}) => {
    if (!open) return null;
  return (
    <div className='pop_contain'>
        <div className='pop_body'>
        <div className='pop_close'>
        <button onClick={close} autoFocus>Cl</button>
        </div>
        <div className='pop_content'>{children}</div> 
        </div>
    </div>
  )
}

export default popup;