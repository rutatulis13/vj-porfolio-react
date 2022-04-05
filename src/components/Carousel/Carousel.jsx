import React, {Component} from 'react';
import Slider from 'infinite-react-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from "prop-types";
import './Carousel.scss';


class Carousel extends Component {
        state = {
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          autoplay: true,
          autoplayScroll: 1,
          autoplaySpeed: 4000,
          wheel: true,
          wheelScroll: 1
        }
      };

      slider = {};
    
    render() {
      const { settings } = this.state;
      return (
          <Slider

            {...settings}
            ref={ele => {
              if (ele) {
                this.slider = ele;
              }
            }}
          >
          {this.props.imgArr.map(image => (
            <div className="carousel" key={image}>
              <LazyLoadImage className="carousel__img" effect="blur" src={image} alt=""/>
            </div>
            ))
          }
          </Slider>
      );
    }
  }

  Carousel.propTypes = {
    imgArr: PropTypes.array
  };
  

export default Carousel;