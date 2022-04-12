import "./ourservices.css";
import wordpress from "../../Assets/Images/wordpress.svg";
import website from "../../Assets/Images/web-site.svg";
import arrow from "../../Assets/Images/arrow.png";
import magnify from "../../Assets/Images/magnifying-glass.svg";
import startup from "../../Assets/Images/startup.svg";
import layer from "../../Assets/Images/layers.svg";
import webdesign from "../../Assets/Images/web-design.svg";

const Ourservices = () => {
  return (
    <section class="section2">
      <div class="sect2container">
        <h1 class="service">Our Service</h1>
        <p class="servicepar">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et.
        </p>
        <div class="grid-cont">
          <div class="site">
            <div class="upperboarder"></div>
            <div class="content">
              <div>
                <img class="img" src={website} alt="siteimg" />
              </div>
              <h3 class="siteheading">WordPress Site</h3>
              <p class="sitepar">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et.
              </p>
              <div class="readmore">
                <p>Readmore</p>
                <div>
                  <img class="arrow" src={arrow} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
          <div class="site">
            <div class="upperboarder"></div>
            <div class="content">
              <div>
                <img class="img" src={wordpress} alt="pluginimg" />
              </div>
              <h3 class="siteheading">WordPress Plugin</h3>
              <p class="sitepar">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et.
              </p>
              <div class="readmore">
                <p>Readmore</p>
                <div>
                  <img class="arrow" src={arrow} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
          <div class="site">
            <div class="upperboarder"></div>
            <div class="content">
              <div>
                <img class="img" src={webdesign} alt="redesignimg" />
              </div>
              <h3 class="siteheading">WordPress Redesign</h3>
              <p class="sitepar">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et.
              </p>
              <div class="readmore">
                <p>Readmore</p>
                <div>
                  <img class="arrow" src={arrow} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
            <div class="site">
            <div class="upperboarder"></div>
            <div class="content">
                <div>
                <img class="img" src={magnify} alt="siteoptimg" />
                </div>
                <h3 class="siteheading">WordPress Site Optimization</h3>
                <p class="sitepar">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et.
                </p>
                <div class="readmore">
                <p>Readmore</p>
                <div>
                    <img class="arrow" src={arrow} alt="arrow" />
                </div>
                </div>
            </div>
            </div>
            <div class="site">
            <div class="upperboarder"></div>
            <div class="content">
                <div>
                <img class="img" src={startup} alt="engoptimg" />
                </div>
                <h3 class="siteheading">Search Engine Optimization</h3>
                <p class="sitepar">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et.
                </p>
                <div class="readmore">
                <p>Readmore</p>
                <div>
                    <img class="arrow" src={arrow} alt="arrow" />
                </div>
                </div>
            </div>
            </div>
            <div class="site">
            <div class="upperboarder"></div>
            <div class="content">
                <div>
                <img class="img" src={layer} alt="mobileappimg" />
                </div>
                <h3 class="siteheading">Cross Platform Mobile App</h3>
                <p class="sitepar">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et.
                </p>
                <div class="readmore">
                <div>
                    <p>Readmore</p>
                </div>
                <img class="arrow" src={arrow} alt="arrow" />
                </div>
            </div>
            </div>
            </div>
      </div>
    </section>
  );
};

export default Ourservices;
