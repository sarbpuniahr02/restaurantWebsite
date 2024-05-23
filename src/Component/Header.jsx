import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <>
    <div className="toolbar" style={{background:"#fff", opacity:"0.9", padding:"20px",position:"fixed",zIndex:1000 ,display:"flex", justifyContent:"space-around", width:"100%", marginTop:"50px"}}>
    <div className="toolbar-title group" style={{display: "flex", color:"#000 ",
    justifyContent: "space-between",
    width: "100%"}}>
      <p className="brunch" style={{ color:"#000 ",}}><a href="#">BRUNCH</a></p>
      <div className='baricon'><FontAwesomeIcon style={{color:"#000"}} icon={faBars} /></div>

      <div className='hidden'>
      <p className="contact" style={{ color:"#000 ",}}><a href="#contact">CONTACT</a></p>
      <p className="events" style={{ color:"#000 ",}}><a href='#events'>EVENTS</a></p>
      <p className="menu" style={{ color:"#000 ",}}><a href='#menu'>MENU</a></p>
      <p className="welcome" style={{ color:"#000 ",}}><a href="#contact">WELCOME</a></p>
      </div>
    </div>
  </div>
    <div className="design">
    <div className="l-constrained-5">
     
      <div className="col-4">
        <div className="text">
          <p className="title">Brunch</p>
          <p className="title-2">full WEBSITE</p>
        </div>
        <div className="main-text">
          <div className="button">READ MORE</div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Header