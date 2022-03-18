import React from 'react'
import contactIcon from '../../assets/contactIcon.jpg';
import { NavLink } from "react-router-dom";
import './Contact.scss'

const Contact = () => {
  return (
    <div className="test">
   <div className="contact">
      <div className="contact__info">
        <h2 className="contact__info--title">contact</h2>
        <span className="contact__info--text">+37069220156</span><br/>
        <span className="contact__info--text">vjokubauskas@gmail.com</span>
      </div>
      <div className="contact__background">
          <img className="contact__background--image" src={contactIcon} alt="Portrait of young woman with curly hair" />
      </div>
      <div className="contact__homepage-link">
            <NavLink to="/home"><span>home</span></NavLink>
        </div>
   </div>
   </div>
  )
}

export default Contact;