import "../App.css";
import "animate.css";
import computeron from "../images/computeron.png";
import { useInView } from "react-intersection-observer";

const Presentation = () => {
  const { ref: myRef, inView: visible } = useInView();

  return (
    <div className="Presentation" ref={myRef}>
      <h1
        className={`${visible ? "animate__animated animate__slideInLeft" : "hidden"}`}
      >
        HEY THERE! I'M GONZA
      </h1>
      <div
        id="Presentation__img"
        className={`${
          visible ? "animate__animated animate__fadeIn animate__delay-1s" : "hidden"
        }`}
      >
        <img src={computeron} alt="" width="25%" />
      </div>
      <h2
        className={`${
          visible ? "animate__animated animate__bounceInDown" : "hidden"
        }`}
      >
        I'm an aspiring Front-End developer <br /> eager to broaden my knowledge{" "}
        <br /> and expand my creativity
      </h2>
    </div>
  );
};

export default Presentation;
