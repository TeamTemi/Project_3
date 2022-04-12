import './strategy.css'


const Strategy = ({ image, title, text}) => {
  return (
    <section class="widen">
        <div class="widecontainer">
        `   <div class="green">
                <img src={image} alt="imagery" />
            </div>
            <div class="wcard">
                <div class="upperboarder"></div>
                <div class="widecontent">
                    <h2 class="wideheading">{title}</h2>
                    <p class="widepar">{text}</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Strategy

