import image from "../../images/grassAndDirtBackground.jpg";
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

        <div className="scorp-box">
          <div className="scorp">🦂</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
