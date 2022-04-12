import illustrator from '../../Assets/Images/Analyse.svg';
import "./herosection.css";
const HeroSection = () => {
  return (
    <section id="analyse" className="section1">
      <div className="section1a">
        <div className="line"></div>
        <h1 className="heading1">
          We help you create your <strong>website</strong>
        </h1>
        <p className="paragragh1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis
          adipiscing tempus, elit nunc iaculis sit. Libero velit quis leo non.
          At donec egestas cras in libero pellentesque. Donec amet phasellus
        </p>
        <div className=" btns">
          <button className="btn1">Get Started</button>
          <button className="btn2">Contact Us</button>
        </div>
      </div>
      <div className="ills">
        <img src={illustrator} alt="illustrator" />
      </div>
    </section>
  );
};

export default HeroSection;
