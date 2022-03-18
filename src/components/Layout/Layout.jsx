import React from 'react'
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Carousel from '../Carousel/Carousel';
import './Layout.scss'

const Layout = ({navigation, title, images}) => {
  return (
    <main className="layout">
        <div className="layout__info">
        <div className="layout__info--title">
            <NavLink to={"/" +  navigation}><span className="layout__info--link">{title}</span></NavLink>
        </div>
        <div className="layout__info--homepage-link">
            <NavLink to="/home"><span>home</span></NavLink>
        </div>
        </div>
        <div className="test">
        <Carousel imgArr = {images} />
        </div>
   </main>
  )
}

Layout.propTypes = {
    navigation: PropTypes.string,
    title: PropTypes.string,
    images: PropTypes.array,
    children: PropTypes.node,
};

export default Layout;
