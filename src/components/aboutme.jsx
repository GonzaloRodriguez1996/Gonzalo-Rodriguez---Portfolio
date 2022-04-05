import "../App.css";
import "animate.css";
import SkillsIcons from "../images/skillicons.png";
import { useInView } from "react-intersection-observer";

const Aboutme = () => {
  const { ref: myRef, inView: visible } = useInView();

  return (
    <div className="Aboutme" ref={myRef}>
      <h1
        className={`${visible ? "animate__animated animate__slideInLeft" : ""}`}
      >
        A little bit about me
      </h1>
      <div
        className={`${
          visible
            ? "p-container animate__animated animate__fadeIn animate__delay-1s "
            : ""
        }`}
      >
        <p>
          I'm a 25 year-old based in Buenos Aires, Argentina. During my early
          teenage years, I remember spending time on the computer blogging on
          websites such as Tumblr. I used to spend hours scrolling through some
          of the blogs where you could download the latest themes for your
          website, admiring the skillfulness of their creators. <br />
          In 2021, something clicked my mind as I retrospectively recalled these
          moments, and I thought 'why not?'. As I timidly throwded myself into
          the world of Web Programming, I began to become more and more
          interested as I pushed forward.
          <br />
          I'm excited to let the world see what I've got to offer, as I continue
          to improve my coding skills one day at a time.
        </p>
      </div>

      <div
        className={`${
          visible
            ? "Skills animate__animated animate__fadeIn animate__delay-1s "
            : "hidden"
        }`}
      >
        <img src={SkillsIcons} alt="" />
      </div>
    </div>
  );
};

export default Aboutme;
