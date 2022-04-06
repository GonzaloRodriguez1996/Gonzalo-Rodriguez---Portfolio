import "../App.css";
import "animate.css";
import ProyectCarousel from "./carousel";
import DragIcon from "../images/dragicon.png";
import { useInView } from "react-intersection-observer";

const Proyects = () => {
  const { ref: myRef, inView: visible } = useInView();

  return (
    <div className="Proyects" ref={myRef}>
      <h1
        className={`${
          visible ? "animate__animated animate__slideInLeft" : "hidden"
        }`}
      >
        Swipe through some of my proyects &nbsp; &nbsp;{" "}
        <img src={DragIcon} width="9%" alt="drag icon" id="DragIcon" />
      </h1>

      <div
        className={`${
          visible
            ? "Proyects-wrapper animate__animated animate__fadeIn animate__delay-1s"
            : "hidden"
        }`}
      >
        <ProyectCarousel />
      </div>
    </div>
  );
};

export default Proyects;
