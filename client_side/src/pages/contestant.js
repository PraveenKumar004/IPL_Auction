import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/manager.css';
import axios from 'axios'
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaHandPaper } from "react-icons/fa";

const Manager = () => {
  const [result, setResult] = useState();
  const { id } = useParams();
  const params = useParams();

  useEffect(() => {
    axios.post('http://localhost:5000/contestant/${id}', { id })
      .then(response => {
        setResult(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);
   
  console.log("check:",{id})
  console.log("new 1:",result)
  return (
    <>
      <div className='Main'>
            <div>
              <div className='home_title'>
                <h1 className='home_title_head'>IPL Auction</h1>
              </div>
              <div>
                <h1 className='man_title'>Team Name: {result ? result.nam : 'No Team'}</h1>
                <h6 className='con_pot'>Total Points : </h6>
              </div>
              <div className='man_mainb'>
                <div className='man_con_flex'>
                  <div className='man_back'>
                    <div className='man_back_sub'>
                      <p className='back_over'>OVERALL POINTS</p>
                      <p className='back_pts'>5000 PTS</p>
                    </div>
                    <div className='man_back_sub'>
                      <p className='back_over_2'>VIRAT KHOLI VIRAT KHOLI</p>
                      <p className='back_pts'>IND - BATSMAN</p>
                      <p className='back_pts_2'>CAPPED PLAYER</p>
                    </div>
                    <div className='man_back_sub'>
                      <p className='back_over'>LAST YEAR POINTS</p>
                      <p className='back_pts'>5000 PTS</p>
                    </div>
                  </div>
                  <div className='man_r_con'>
                    <div className='man_back_sub'>
                      <p className='back_over' >START PRICE</p>
                      <p className='back_pts'>78 Cr</p>
                    </div>
                    <div className='man_back_sub'>
                      <p className='back_over'>END PRICE</p>
                      <p className='back_pts'>79 Cr</p>
                    </div>
                  </div>
                  <div className='man_r_con'>
                    <div className='man_back_sub'>
                      <p className='man_c_bid' >CURRENT BID</p>
                      <p className='man_title_u'>Royal Challengers Bangalore</p>
                    </div>
                  </div>
                  <div className='man_r_con_2'>
                    <h1 className='man_icon'><MdPersonAddAlt1 /></h1>
                    <h1 className='man_icon_3'>Make Bid</h1>
                    <h1 className='man_icon'><FaHandPaper /></h1>
                  </div>
                </div>
                <div className='man_table'>
                  <p className='man_time'>END TIME : </p>
                  {/* <p>Extend Time:</p> */}
                  <div>
                    <div className='man_t_body'>
                      <div className='man_t_head'>PLAYERs LIST</div>
                      <div className='tab_body_con'>
                        <p className='man_title'>RCB</p>
                        <button className='man_n_but'>Need?</button>
                        <p>Yes</p>
                      </div>
                      <div className='tab_body_con'>
                        <p className='man_title'>RCB</p>
                        <button className='man_n_but'>Need?</button>
                        <p>Yes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>

    </>
  )
}

export default Manager;