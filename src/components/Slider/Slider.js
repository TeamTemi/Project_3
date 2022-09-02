import Userpic1 from '../../Assets/Images/Userpic1.svg';
import Userpic2 from '../../Assets/Images/Userpic2.svg';
import Userpic3 from '../../Assets/Images/Userpic3.svg';
// import Userpic4 from '../../Assets/Images/Userpic4.svg';
// import Userpic5 from '../../Assets/Images/Userpic5.svg';

import "./slider.css";
import star from '../../Assets/Images/star.png'  
import React, { Component } from "react";
import Slider from "react-slick"; 



export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
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
        ],
        vertical: true,
        verticalSwiping: true,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      };
     

    return (
      <div className='section6'>
       <div className="sect6cont">
            <h3 className="testimonial">Testimonial</h3>
            <h1 className="ourhappy">Our Happy Clients</h1>
        </div>
        <Slider {...settings} 
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
                    <div className="review">
                        <h1 className="five">5.0</h1>
                        <div className='star'>
                            <img  src= {star} alt="userpic" /> 
                        </div>
                        <h5 class="comment">We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand</h5>
                    </div>
                    <div class="review">
                        <h1 class="five">5.0</h1>
                        <div className='star'>
                            <img  src= {star} alt="userpic" /> 
                        </div>
                        <h5 class="comment">We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand</h5>
                    </div>
                    <div class="review">
                        <h1 class="five">5.0</h1>
                        <div className='star'>
                            <img  src= {star} alt="userpic" /> 
                        </div>
                        <h5 class="comment">We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand</h5>
                    </div>
                    <div class="review">
                        <h1 class="five">5.0</h1>
                        <div className='star'>
                            <img  src= {star} alt="userpic" /> 
                        </div>
                        <h5 class="comment">We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand</h5>
                    </div>
                    <div class="review">
                        <h1 class="five">5.0</h1>
                        <div className='star'>
                            <img  src= {star} alt="userpic" /> 
                        </div>
                        <h5 class="comment">We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand</h5>
                    </div>

        </Slider>
                
        <Slider
          className="slider2"
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
        >
                        <div className='imagez'>
                            <img src= {Userpic1} alt="Userpic1" />  
                        </div>
                        <div className='imagez'>
                            <img src= {Userpic2} alt="Userpic2" /> 
                        </div>
                        <div className='imagez'>
                            <img src= {Userpic3} alt="Userpic3" /> 
                        </div>
                        <div className='imagez'>
                            <img src= {Userpic1} alt="Userpic4" />  
                        </div>
                        <div className='imagez'>
                            <img src= {Userpic2} alt="Userpic5" /> 
                        </div>   
        </Slider>
                    <div class="namecase">  
                      <h3 class="name">Paulus Haverinen</h3>
                      <p>Owner, Ikirakenne Ltd</p>
                    </div>
      </div>
    );
  }
}
