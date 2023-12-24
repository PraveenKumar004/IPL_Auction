import React, { useState } from 'react';
import Popupbox from '../components/popup';
import '../styles/home.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom'

function Home() {
  const [manager, setManager] = useState(false);
  const [create, setCreate] = useState(false);
  const [exist, setExist] = useState(false);
  const [contest, setContest] = useState(false);
  const navigate = useNavigate()

  const [values, setValues] = useState({
    nam: '',
    password: '', amount:'',
  });

  function inputGetting(e) {
    const name = e.target.name;
    const newDetails = { ...values };
    newDetails[name] = e.target.value;
    setValues(newDetails);
    console.log(newDetails)
  }
  const submit = async (e) => {
    console.log("click");
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/reg', values)
        .then( result =>{
          if(result.data === "stored"){
            navigate('/manager')
          }
        else{
          alert("Already Exist Username")
        }}
        )   
    } catch (error) {
        console.error("Error", error.message);
    }
};
const lsubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:5000/log', values)
    .then( result =>{
      if(result.data === "login_success"){
        navigate('/manager')
        }
      else if(result.data === "Wrong_username"){
        alert("Wrong Username!!")
      }  
      else{
        alert("Wrong Password!!")
      }
      }
    )   
} catch {
    console.error("Error");
} 
};


  return (
    <>
      <div className='Main'>
        <div className='home_title'>
          <h1 className='home_title_head'>IPL Auction</h1>
        </div>
        <div className='home_body'>
          <div><button className='home_button' onClick={() => { setManager(true) }}>Manager Login</button></div>
          <div><button className='home_button' onClick={() => { setContest(true) }}>Contestant Login</button></div>
        </div>
      </div>
      <div>
        <Popupbox open={manager} close={() => { setManager(false) }}>
          <div><h1 className='home_manage'>Manager</h1></div>
          <div className='man_but'>
            <div><button className='home_button' onClick={() => { setCreate(true); setManager(false) }}> Create Auction Room</button></div>
            <div><button className='home_button' onClick={() => { setExist(true); setManager(false) }}> Existing Room</button></div>
          </div>
        </Popupbox>
        <Popupbox open={create} close={() => { setCreate(false) }}>
          <div><h1 className='home_manage'>Manager</h1></div>
          <div className='man_but'>
            <h1 className='home_manage_sup'>Sign up</h1>
            <form className='from_di' onSubmit={submit}>
              <h1 className='home_id'>ID : </h1>
              <select className='home_sel' required>
                <option>Select Time</option>
                <option>1.00 Minutes</option>
                <option>1.30 Minutes</option>
                <option>2.00 Minutes</option>
              </select>
              <input placeholder='ENTER USERNAME' className='create_inp' required name='nam' onChange={inputGetting}></input>
              <input type='password' placeholder='ENTER PASSWORD' className='create_inp' name='password' onChange={inputGetting} required></input>
              <input type='number' placeholder='ENTER AMOUNT (MAX 100C)'className='create_inp' min='1' max='100' name='amount'  onChange={inputGetting} required></input>
              <div className='but_back'><button type='submit' className='create_b'> Sign up</button></div>
            </form>
          </div>
        </Popupbox>
        <Popupbox open={exist} close={() => { setExist(false) }}>
          <div>
            <form onSubmit={lsubmit}>
              <div><input placeholder='ENTER ID' className='create_inp' required name="nam" onChange={inputGetting}></input></div>
              <div><input type='password' placeholder='ENTER PASSWORD' className='create_inp' name="password" required onChange={inputGetting}></input></div>
              <div className='but_back'><button type='submit' className='create_b'>Log in</button></div>
            </form>
          </div>
        </Popupbox>
        <Popupbox open={contest} close={() => { setContest(false) }}>
          <div>
            <form>
              <div><input placeholder='ENTER ID' className='create_inp' required></input></div>
              <div className='but_back'><button type='submit' className='create_b'>Log in</button></div>
            </form>
          </div>
        </Popupbox>
      </div>
    </>
  );
}

export default Home;
