import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousal.css";
import image1 from "./../assets/images/1.jpg";
import image2 from "./../assets/images/2.jpg";
import image3 from "./../assets/images/3.jpg";

const CarouselContainer = () => {
  return (
    <Carousel fade={false} pause={false}>
      <Carousel.Item style={{}} interval={3000}>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h4>First slide label</h4>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={image2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={image3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
