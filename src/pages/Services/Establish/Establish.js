import './establish.css';
import image1 from "../../../Assets/Images/image 1.svg";

const Establish = () => {
  return (
    <section className="services-section4"> 
        <div className="ss4container">
                <div className="ss4content">
                    <h1 className="ss4head">Establishing online presence </h1>
                    <div className="ss4par">
                        <p>
                            Every SaaS website, regardless of niche, must do one thing brilliantly, which is converting visitors into users. At first glance, the site should encourage and guide visitors in a smooth way towards call-to-actions. <br /><br />
                        </p>

                        <p>
                            This goes hand in hand with a responsive design, meaning it needs to be apt for different devices.<br /><br />
                        </p>
                        <p>
                            We use a data-driven approach to measure user response when developing the site. This method usually makes the site quicker to launch, is more cost-effective and more successful in the long run.<br /><br />
                        </p>
                        <p>
                            The pages need to be search engine optimized (SEO) because it lays the foundation for the technical quality, which in turn determines how high it will rank among search results. We also make sure that your website is indexed properly.<br /><br />
                        </p>
                        <p>
                            We audit your audience and get to know your target market to be able to speak to them through the website in the best possible way. By finding out their consumer behavior we can refine the website approach.<br /><br />
                        </p>
                    </div>
                </div>
                <div className="ss4sec2">
                  <h1 className="ss4head1">Schedule a free session</h1>
                    <div className="img1">
                        <img src={image1} alt="image1" />
                    </div>
                </div>
            </div>
    </section> 
  )
}

export default Establish