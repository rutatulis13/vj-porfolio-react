import React from 'react';
import availableImg from '../../pages/Archive/ArchiveImg';
import './Carousel.scss';

const CarouselImg = () => {
    return (
        <React.Fragment>
            {availableImg.map(image => (
            <div className="carousel" key={image}>
                <img className="carousel__img" src={image} alt=""></img>
            </div>
                )
            )}
    </React.Fragment> 
    )}

export default CarouselImg;