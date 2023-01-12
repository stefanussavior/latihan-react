import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/Carousel.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel infiniteLoop autoPlay showThumbs={false} showArrows={false}>
        <div>
          <img
            src={require("../image/coba1.jpg")}
            className="foto"
            alt="foto1"
          />
        </div>
        <div>
          <img
            src={require("../image/coba.jpg")}
            className="foto"
            alt="foto2"
          />
        </div>
        <div>
          <img
            src={require("../image/coba1.jpg")}
            className="foto"
            alt="foto3"
          />
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
