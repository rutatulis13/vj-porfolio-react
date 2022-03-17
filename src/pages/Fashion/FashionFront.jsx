import React from 'react'
import { NavLink } from "react-router-dom";
import galleries from '../../components/constants/galleries.js';
import './FashionFront.scss'

const FashionFront = () => {
  return (
    <main className="fashion">
        <div className="fashion__container">
        <div className="fashion__container--title">
            <NavLink to="/fashion"><span>fashion</span></NavLink>
        </div>
        <div className="fashion__container--homepage-link">
            <NavLink to="/home"><span>home</span></NavLink>
        </div>
        </div>
        <div className="fashion__grid">
            {galleries.map(image => (
                <div className="fashion__grid--item" key={image.front}>
                     <NavLink to={"/fashion/" + image.id}>
                         <div className="fashion__grid--item-img" style={{ "backgroundImage" : `url(${image.front})` }}><h3 className="fashion__grid--item-title">{image.title}</h3></div>
                    </NavLink>
                </div>
                    )
                )
            }
        </div>
   </main>
  )
}

export default FashionFront;