import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="lomoronk" />
        </Link>

        <nav>
            <NavLink activeClassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink activeClassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink activeClassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink activeClassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>

        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/lomoronk/">
                 <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />   
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/rvnlsk">
                 <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />   
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://open.spotify.com/user/11157662076?si=1413a054db324ff3">
                 <FontAwesomeIcon icon={faSpotify} color="#4d4d4e" />   
                </a>
            </li>
        </ul>
    </div>
)


export default Sidebar