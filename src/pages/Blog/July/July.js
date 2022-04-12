import './july.css';

const July = ({ image, title, text, }) => {
  return (
    <div className="drum">
        <button className='kevi'>July 15</button>
        <div className="contex">
        <div className="pic">
            <img  src={image} alt="siteimg" />
        </div>
            <h3 className="drumheading">{title}</h3>
            <p className="drumpara">{text}</p>
            <button className='kev'>Read More</button>
            </div>
    </div>
  )
}

export default July