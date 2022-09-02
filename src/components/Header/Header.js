import Logo from "../../Assets/Images/logo.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import CloseIcon from '@mui/icons-material/CloseRounded';
import "./header.css";
import ThemeSwitcher from "../../components/ThemeSwitcher";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 875px)").matches
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.matchMedia("(max-width: 875px)").matches);
    });
  }, []);

  return (
    <header>
      <div className="logo-container">
        <img src={Logo} alt="logo-1" />
      </div>
      <div className="navMenu">
        <nav className={isMobile && isNavOpen ? "open" : undefined}>
          {isMobile && (
            <div
              className="closeIcon"
              tabIndex="0"
              role="button"
              onClick={() => setIsNavOpen(false)}
              onKeyDown={() => setIsNavOpen(false)}
            >
              <CloseIcon />
            </div>
          )}
          <ul className="navlinks">
            <li>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/case">Case</Link>
            </li>
            <li>
              <Link to="/dacodespecialists">DaCode Specialists</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

      </div>
      <button className="header_btn">Request a quote</button>
      <div className="switch">
      </div>

      {isMobile && (
        <div
          className="hamburger"
          tabIndex="0"
          role="button"
          onClick={() => setIsNavOpen(true)}
          onKeyDown={() => setIsNavOpen(true)}
        >
          <FiMenu />


        </div>
      )}
      <div className="stylee">

        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;

