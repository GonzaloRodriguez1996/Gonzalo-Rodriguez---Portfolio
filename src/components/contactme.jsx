import "../App.css";
import "animate.css";
import gmail from "../images/gmail.gif";
import linkedin from "../images/linkedin.gif";
import whatsapp from "../images/whatsapp.gif";
import Form from "./form";
import { useInView } from "react-intersection-observer";

const Contactme = () => {
  const { ref: myRef, inView: visible } = useInView();

  return (
    <div className="Contactme" ref={myRef}>
      <h1 className={`${visible ? "" : ""}`}>Feel free to drop a message!</h1>

      <div className={`${visible ? "Form-wrapper " : "Form-wrapper"}`}>
        <Form />
        
      </div>

      <div className="socialmenu-wrapper">
        <h2>
          ...or you can either contact me <br /> through my socials
        </h2>

        <div className="social-menu">
          <ul>
            <li>
              {" "}
              <a href="mailto:rodriguez.gzal@gmail.com">
                {" "}
                <img src={gmail} alt="" width="75%" />
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href=" https://wa.me/5491137800298">
                {" "}
                <img src={whatsapp} alt="" width="75%" />
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://www.linkedin.com/in/gonzalo-rodriguez-011b16137/">
                {" "}
                <img src={linkedin} alt="" width="75%" />
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
