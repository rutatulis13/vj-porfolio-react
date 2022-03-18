import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout.jsx'
import galleries from "../../components/constants/galleries.js"

const Fashion = () => {
  
  const { id } = useParams()
  console.log(id)

  const findGallery = galleries.find(image => image.id === parseInt(id))

  return(
      <Layout navigation="fashion" title="fashion" images={findGallery.gallery}/>
   ) 
}

export default Fashion;