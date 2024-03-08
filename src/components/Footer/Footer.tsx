import image from "../../images/grassGround.png";
import instaIcon from "../../icons/instagramIcon.svg";
import githubIcon from "../../icons/githubIcon.svg";
import linkedinIcon from "../../icons/linkedinIcon.svg";
import "./Footer.css";


const Footer: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className="footer-box">
        <img
          style={{ width: "100%", height: "100%" }}
          src={image}
          alt="Footer Placeholder"
        />
        <div className="icon-box">
          <a href="https://www.instagram.com/jwd0526/">
            <img src={instaIcon} alt="Instagram Icon"/>
          </a>
          <a href="https://github.com/jwd0526">
            <img src={githubIcon} alt="GitHub Icon"/>
          </a>
          <a href="https://www.linkedin.com/in/jwd0526/">
            <img src={linkedinIcon} alt="LinkedIn Icon"/>
          </a>
        </div>
        <div className="scorp-box">
          <div className="scorp">🦂</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
