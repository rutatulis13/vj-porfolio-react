import React from "react"
import logo from "../../assets/logo.png";
import './Loader.scss'

const Loader = () => {

setTimeout(function() {
  window.location.replace('home');
}, 3000);

  return (
      <div className="loader__container">
          <img className="loader__container--img" src={logo} />
      </div>
  )
}

export default Loader;