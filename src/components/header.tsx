import profileLogo from "@assets/images/profile.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export const Header = () => (
  <div className="header">
    <img src={profileLogo} className="logo" alt="Profile logo" />
    <h1>Joe Esteves</h1>
    <h5>Full-Stack Team Lead</h5>
    <h5>joe@esteves.ar</h5>
    <div className="header__social-links">
      <a href="https://github.com/joeesteves" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a href="https://www.linkedin.com/in/estevesjoe/" target="_blank">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
  </div>
);
