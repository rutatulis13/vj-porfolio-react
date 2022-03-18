import React from 'react'
import PropTypes from "prop-types";
import Layout from '../../components/Layout/Layout.jsx'
import availableImg from '../../components/constants/archiveImg.js';

const Archive = () => {
  return (
    <Layout navigation="personal-projects" title="personal projects" images = {availableImg} />
  )
}

Archive.propTypes = {
  availableImg: PropTypes.array,
};

export default Archive;