import React from 'react'
import './dablog.css'
import arrow from "../../Assets/Images/arrow.png"

const Dablog = () => {
  return (
    <section className="section7">
          <div className="sect7content">
            <div className="flex1">
              <h5 className="news">News & Articles</h5>
              <h1 className="blog">DaCode Blog</h1>
              <p className="blogpar">On dacode blog we review the latest in web development for the SaaS-, tech- and crypto industry. </p>
              <button className="btnseeAll">See All</button>
            </div>
            <div className="slides">
              <div className="slide1">      
                <div className="sit">
                 
                  <div className="conte">
                    <h3 className="siteheading">
                      Why Your SaaS Business should use WordPress
                    </h3>
                    <p className="sitepar">
                      A content management system like word press can help build an highly engaging website for you SaaS business with little to no effort.
                    </p>
                    <div className="readmore">
                      <p>Readmore</p>
                      <img className="arrow" src={arrow} alt="arrow"/>
                    </div>              
                  </div>
                </div>
                <div className="sit">
                  <div className="conte">
                    <h3 className="siteheading">
                      Why Your SaaS Business use WordPress
                    </h3>
                    <p className="sitepar">
                      A content management system like word press can help build an highly engaging website for you SaaS business with little to no effort.
                    </p>
                    <div className="readmore">
                      <p>Readmore</p>
                      <img className="arrow" src={arrow} alt="arrow"/>
                    </div>        
                  </div>
                </div>
                <div className="sit">
          
                  <div className="conte">
                   
                    <h3 className="siteheading">
                      Why Your SaaS Business use WordPress
                    </h3>
                    <p className="sitepar">
                      A content management system like word press can help build an highly engaging website for you SaaS business with little to no effort.
                    </p>
                    <div className="readmore">
                      <p>Readmore</p>
                      <img className="arrow" src={arrow} alt="arrow"/>
                    </div>
                  </div>             
                </div> 
              </div>
            </div>
          </div>
        </section>
  )
}

export default Dablog