import { inherits } from "util";
import Section from "../Section";
import "./Extra.css";
import { useEffect } from "react";

const Extra: React.FC = () => {
  useEffect(() => {
    const observess = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("mover");
        }
      });
    });

    const cloudElem = document.querySelector(".cloud");
    if (cloudElem) {
      observess.observe(cloudElem);
    }
  }, []);

  return (
    <>
      <div className="cloud-box">
        <p className="cloud">☁️</p>
      </div>
      <Section
        title="Extra"
        gradientStart="#34678F"
        gradientEnd="#3278AF"
        idName="extra">
        <p className="filler hidden">
          This section could contain additional information or contact details.
        </p>
      </Section>
    </>
  );
};

export default Extra;
