import './card.css';

const Card = ({ image, title, text, image2  }) => {
  return (
    <div className="box">
    <div className="contez">
      <div className="rimg">
        <img  src={image} alt="siteimg" />
      </div>
          <h3 className="siteheading">{title}</h3>
          <p className="sitepare">{text}</p>
          <div className="in">
            <img src={image2} alt="linkedin" />
          </div>
          <button className='kev'>kevin@dacode.se</button>
        </div>
    </div>
  )
}

export default Card