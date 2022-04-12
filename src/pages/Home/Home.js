import HeroSection from "../../components/HeroSection/HeroSection";
import Ourservices from '../../components/OurServices/Ourservices'
import Reality from "../../components/Reality/Reality";
import Intrest from "../../components/Intrest/Intrest";
import Dablog from "../../components/Dablog/Dablog"
import Slider from '../../components/Slider/Slider';
import Slick from '../../components/Slick/Slick';

function Home() {
  return (
    <div>
      <HeroSection />
      <Ourservices />
      <Slick />
      <Reality />
      <Intrest title="Interested to work with us ?" text="Send a line here get and update daily" />
      <Slider />
      <Dablog />
    </div>
  );
}

export default Home