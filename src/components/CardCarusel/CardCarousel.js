import React, { Component } from "react";
import Slider from "react-slick";
import "./CardCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Icons from "react-icons/all";
import { IconContext } from "react-icons";
import { data } from "./data";

export class CardCarousel extends Component {
  render() {
    const DynamicIcon = ({ name }) => {
      const IconComponent = Icons[name];
      if (!IconComponent) {
        return <Icons.FaBeer />;
      }
      return <IconComponent />;
    };

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      
      <div className="container">
        <h1 style={{marginBottom: "50px", marginTop: "50px"}}>Portfolio</h1>
        <IconContext.Provider value={{ color: "#419be0", size: "40px" }}>
          <Slider {...settings}>
            {data.map((project) => (
              <div>
                <div class="card">
                  <div class="card-circle">
                    <DynamicIcon name={project.icon} />
                  </div>
                  <div class="text-content">
                    <span class="card-title">
                      <strong>{project.title}</strong>
                    </span>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}


          </Slider>
        </IconContext.Provider>
      </div>
    );
  }
}

export default CardCarousel;
