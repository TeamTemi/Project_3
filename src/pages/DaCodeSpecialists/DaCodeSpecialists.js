import Team from '../../pages/DaCodeSpecialists/Team/Team'
import Card from '../../components/Card/Card';
import round from "../../Assets/Images/Ellipse1.svg";
import linked from '../../Assets/Images/linkedin.svg';

function DaCodeSpecialists() {
  return (
    <div>
      <Team />
      <div className='wrap'>
        <Card image={round} image2={linked} title="Kevin Jeppesen" text="Web Project Manager" />
        <Card image={round} image2={linked} title="Kevin Jeppesen" text="Web Project Manager" />
        <Card image={round} image2={linked} title="Kevin Jeppesen" text="Web Project Manager" />
        <Card image={round} image2={linked} title="Kevin Jeppesen" text="Web Project Manager" />
        <Card image={round} image2={linked} title="Kevin Jeppesen" text="Web Project Manager" />
        <Card image={round} image2={linked} title="Kevin Jeppesen" text="Web Project Manager" />
        <Card image={round} image2={linked} title="Kevin Jeppesen" text="Web Project Manager" />
        <Card image={round} image2={linked} title="Kevin Jeppesen" text="Web Project Manager" />
        <Card image={round} image2={linked} title="Kevin Jeppesen" text="Web Project Manager" />
        <Card image={round} image2={linked} title="Kevin Jeppesen" text="Web Project Manager" />
        <Card image={round} image2={linked} title="Kevin Jeppesen" text="Web Project Manager" />
        <Card image={round} image2={linked} title="Kevin Jeppesen" text="Web Project Manager" />
      </div>
    </div>
  );
};

export default DaCodeSpecialists