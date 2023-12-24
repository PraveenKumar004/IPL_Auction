import React from 'react'
import '../styles/nav.css'
import { IoMdCloseCircleOutline } from "react-icons/io";


const popup = ({open,children,close,head}) => {
    if (!open) return null;
  return (
    <div className='pop_contain'>
        <div className='pop_body'>
        <div className='pop_close'>
        <p1 onClick={close} className='close_button'><IoMdCloseCircleOutline /></p1>
        </div>
        <div className='pop_content'>{children}</div> 
        </div>
    </div>
  )
}

export default popup;