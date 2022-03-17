import React from 'react'
import PropTypes from "prop-types";
import Layout from '../../components/Layout/Layout.jsx'
import availableImg from '../../components/constants/archiveImg.js';

const Archive = () => {
  console.log(availableImg)
  return (
    <Layout title="archive" images = {availableImg} />
  )
}

Archive.propTypes = {
  availableImg: PropTypes.array,
};

export default Archive;