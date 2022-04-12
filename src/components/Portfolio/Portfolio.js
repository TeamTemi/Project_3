import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="section3">
        <div className="section3b">
            <div className="sect3head">
            <h3 className="portfolio">Portfolio</h3>
            <h1 className="our">Our great Work</h1>
            </div>
        </div>
        <div className="section3flex">
            <button className="btnopt">Website Optimization</button>
            <h2>Website Redesign</h2>
            <h2>Search Engine Optimization</h2>
        </div>
        <div className="section3img">
            <div className="sect3-box"> 
                <div
                    img className="img-container2" src={imageph1} alt="slider1">
                </div>
                {/* <p class="img-containercLorem ipsum dolor sit amet, consectetur adipiscing elit7 Morbi cursus vitae tortor sapien, 
                lectus scelerisque porttitor. Dolor nulla bibendum </p> */}
            </div>
            <div className="section3img">
              <div className="sect3-box"> 
              <div
                    img className="img-container2" src={imageph1} alt="slider1">
                </div>
                <p className="img-containerco">Lorem ipsum dolor sit amet, consectetur adipiscing elit7 Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
              </div>
              <div className="sect3-box">
                <div img className="img-container2" src="./image/ImgaePlaceHolder1.png" alt=""></div>
                <p className="img-containerco">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
              </div>
              <div className="sect3-box">
                <div img className="img-container2" src="./image/ImgaePlaceHolder2.png" alt="">
                <p className="img-containerco" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
              </div>
            </div>
          </div>         
          <button className="seeall">See All</button>
          
        </div> 
        
        

    </section>
  );
};

export default Portfolio;
