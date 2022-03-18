import React from 'react'
import { NavLink } from "react-router-dom";
import archiveImg from "../../assets/personal/archiveIcon.jpg"
import fashionImg from "../../assets/homepageIcon.jpg"
import contactImg2 from "../../assets/fashionFront/fashion_0005.jpg"
import './Navigation.scss'

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__link">
        <li className="navbar__link--item">
          <NavLink to="/personal-projects"><span>personal projects</span></NavLink>
        </li>
        <li className="navbar__link--item">
          <NavLink to="/fashion"><span>fashion</span></NavLink>
        </li>
        <li className="navbar__link--item">
          <NavLink to="/contact"><span>contact</span></NavLink>
        </li>
      </ul>
      <ul className="navbar__link-mobile">
        <li className="navbar__link-mobile--item">
          <NavLink to="/personal projects">
            <div className="navbar__link-mobile--item-img" style={{ "backgroundImage" : `url(${archiveImg})` }}>
              <span  className="navbar__link-mobile--item-title">personal projects</span>
            </div>
          </NavLink>
        </li>
        <li className="navbar__link-mobile--item">
          <NavLink to="/fashion">
            <div className="navbar__link-mobile--item-img" style={{ "backgroundImage" : `url(${fashionImg})` }}>
              <span className="navbar__link-mobile--item-title">fashion</span>
            </div>
          </NavLink>
        </li>
        <li className="navbar__link-mobile--item">
          <NavLink to="/contact">
            <div className="navbar__link-mobile--item-img"style={{ "backgroundImage" : `url(${contactImg2})` }} >
              <span className="navbar__link-mobile--item-title">contact</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
