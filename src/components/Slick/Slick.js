import React, { Component } from "react";
import Slider from "react-slick";
import './slick.css';
import imageph0 from "../../Assets/Images/Imgaeplaceholder1.svg";
import imageph1 from "../../Assets/Images/Imgaeplaceholder2.svg";
import imageph2 from "../../Assets/Images/Imgaeplaceholder3.svg";
import mask1 from "../../Assets/Images/Mask1.svg";
import mask2 from"../../Assets/Images/Mask2.svg";
import mask3 from "../../Assets/Images/Mask3.svg";
import mask4 from "../../Assets/Images/Mask1.svg";
import mask5 from"../../Assets/Images/Mask2.svg";
import mask6 from "../../Assets/Images/Mask3.svg";
import orna from '../../Assets/Images/Ornament.svg';


export default class PauseOnHover extends Component {
    render() {
      const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
      
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      return (
        <div className="section3">
            <div className="section3b">
                <div className="sect3head">
                    <h3 className="portfolio">Portfolio</h3>
                    <h1 className="our">Our Great Work</h1>
                </div> 
            </div>    
            <div className="section3flex">
                <button className="btnopt">Website Optimization</button>
                <h2>Website Redesign</h2>
                <h2>Search Engine Optimization</h2>
            </div>
          <Slider className="section3img" {...settings}>
            <div className="sect3-box">
                <img className="img-container2" src={imageph0} alt="slider A" />
                <p className="img-containerco">Lorem ipsum dolor sit amet, consectetur adipiscing elit7 Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
            </div>
            <div className="sect3-box">
                <img className="img-container2" src={imageph1} alt="slider B" />
                <p className="img-containerco">Lorem ipsum dolor sit amet, consectetur adipiscing elit7 Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
            </div>
            <div className="sect3-box">
                <img className="img-container2" src={imageph2} alt="slider C" />
                <p className="img-containerco">Lorem ipsum dolor sit amet, consectetur adipiscing elit7 Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
            </div>
            <div className="sect3-box">
                <img className="img-container2" src={mask1} alt="slider1" />
                <p className="img-containerco">Lorem ipsum dolor sit amet, consectetur adipiscing elit7 Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
            </div>
            <div className="sect3-box">
                <img className="img-container2" src={mask2} alt="slider2" />
                <p className="img-containerco">Lorem ipsum dolor sit amet, consectetur adipiscing elit7 Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
            </div>
            <div className="sect3-box">
                <img className="img-container2" src={mask3} alt="slider3" />
                <p className="img-containerco">Lorem ipsum dolor sit amet, consectetur adipiscing elit7 Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
            </div>
            <div className="sect3-box">
                <img className="img-container2" src={mask4} alt="slider4" />
                <p className="img-containerco">Lorem ipsum dolor sit amet, consectetur adipiscing elit7 Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
            </div>
            <div className="sect3-box">
                <img className="img-container2" src={mask5} alt="slider5" />
                <p className="img-containerco">Lorem ipsum dolor sit amet, consectetur adipiscing elit7 Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
            </div>
            <div className="sect3-box">
                <img className="img-container2" src={mask6} alt="slider6" />
                <p className="img-containerco">Lorem ipsum dolor sit amet, consectetur adipiscing elit7 Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
            </div>
          </Slider>
            <div className="backgroun">
                <img src={orna} alt="slider1" />
            </div>
          <button class="seeall">See All</button>
        </div>
      );
    }
  }