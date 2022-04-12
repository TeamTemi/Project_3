import './footer.css'


const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footercontainer">
          <div className='logo'>
            <h1>Logo</h1>
            <p className="ftpar">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        <div class="flexcontainer">
          <ul className='parto'>
            <h3 class="set">Work</h3>
            <li>
              Blog
            </li>
            <li>
              How we work
            </li>
            <li>
              Testimonial
            </li>
          </ul>
          <ul className='parto'>
            <h3 class="set">Services</h3>
            <li>
              Marketing strategy
            </li>
            <li>
              Website Optimization
            </li>
            <li>
              Email Marketing
            </li>
          </ul>
          <ul className='parto'>
            <h3 className="set">Business Solution</h3>
            <li>
              Partnership
            </li>
            <li>
              About project
            </li>
            <li>
              Corporate
            </li>
          </ul>
          <ul className='parto'>
            <li>
              <h3 className="set">Languages</h3>
            </li>
          </ul>

        </div>
      </div>

      <div className="line2"></div>
      <div className="social">
        <div className="da">
          <p>@Dacode.2020</p>
        </div>
        <div className="soc">
          <div className="fb">FB</div>
          <div className="twitter">TW</div>
          <div className="instagram">IG</div>
        </div>
      </div>

    </footer>
  )
}

export default Footer