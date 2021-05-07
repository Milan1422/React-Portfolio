import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/jumbotron/slide1.webp";
import Slide2 from "../../assets/img/jumbotron/slide2.webp";
import Slide3 from "../../assets/img/jumbotron/slide3.webp";
import ScrollDown from "../ScrollDown/scrollDown";
import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default Jumbotron;
