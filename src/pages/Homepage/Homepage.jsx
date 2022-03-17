import React from 'react'
import { NavLink } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation.jsx';
import homepageIcon from '../../assets/homepageIcon.jpg';
import './Homepage.scss'

const Homepage = () => {
  return (
  <React.Fragment>
   <div className="homepage">
     <div className="homepage__nav-block">
        <NavLink to="/home"><h1 className="homepage__logo">vaidas jokubauskas</h1></NavLink>
        <div className="homepage__navigation-section">
          <Navigation />
        </div>
      </div>
      <div className="homepage__background">
          <img className="homepage__background--image" src={homepageIcon} alt="Portrait of woman with flower on her face" />
      </div>
   </div>
   </React.Fragment>
  )
}

export default Homepage;