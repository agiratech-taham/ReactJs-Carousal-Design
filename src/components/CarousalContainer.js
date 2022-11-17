import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousal.css";
import image1 from "./../assets/images/template.jpg";
import image2 from "./../assets/images/02.jpg";
import image3 from "./../assets/images/03.jpg";
import { HdOutlined } from "@mui/icons-material";
import { hover } from "@testing-library/user-event/dist/hover";

const CarouselContainer = () => {
  return (
    <Carousel fade={false} pause={hover}>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption
          style={{
            // background: "red",
            width: "35rem",
            marginBottom: "8rem",
            marginLeft: "3rem",
          }}
        >
          <h1>The Most Valuable Thing Is Your Health</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            style={{
              marginRight: "29rem",
              background: "rgba(17, 48, 88, 0.973)",
              border: "none",
            }}
          >
            Read Article
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={image2} alt="Second slide" />
        <Carousel.Caption
          style={{
            // background: "red",
            width: "35rem",
            marginBottom: "8rem",
            marginLeft: "3rem",
          }}
        >
          <h1>The Most Valuable Thing Is Your Health</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            style={{
              marginRight: "29rem",
              background: "rgba(17, 48, 88, 0.973)",
              border: "none",
            }}
          >
            Read Article
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={image3} alt="Third slide" />
        <Carousel.Caption
          style={{
            // background: "red",
            width: "35rem",
            marginBottom: "8rem",
            marginLeft: "3rem",
          }}
        >
          <h1>The Most Valuable Thing Is Your Health</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            style={{
              marginRight: "29rem",
              background: "rgba(17, 48, 88, 0.973)",
              border: "none",
            }}
          >
            Read Article
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
