import "../App.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import linkicon from "../images/linkicon.png";
import githubicon from "../images/githubicon.png";
import MassageProyect from "../images/proyect3.png";
import BooksProyect from "../images/proyect2.png";
import QuizProyect from "../images/proyect1.png";

export default class ProyectCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="proyect">
            <h3>Massage Website</h3>
            <img src={MassageProyect} alt="" width="40%" />
            <div className="Description-wrapper">
              <p>
                A website I created to advertise my sister's
                professional massage services. I found it useful to get to know bootstrap classes. It
                includes a sliding carousel, an informative section and a
                contact form.
              </p>
            </div>
            <ul>
              <li>
                <a href="https://massage-website-three.vercel.app/">
                  <img src={linkicon} alt="link icon" width="80%" />
                </a>
              </li>
              <li>
                <a href="https://github.com/GonzaloRodriguez1996/Massage-website">
                  <img src={githubicon} alt="github icon" width="70%" />
                </a>
              </li>
            </ul>
          </div>
          <div className="proyect">
            <h3>Book E-commerce</h3>
            <img src={BooksProyect} alt="" width="40%" />
            <div className="Description-wrapper">
              <p>
                This is Book webstore which consumes an API provided by
                Mercadolibre.com to display products. It also includes a
                shopping cart.
              </p>
            </div>
            <ul>
              <li>
                <a href="https://react-e-commerce-sooty.vercel.app/Products">
                  <img src={linkicon} alt="link icon" width="80%" />
                </a>
              </li>
              <li>
                <a href="https://github.com/GonzaloRodriguez1996/React-E-commerce">
                  <img src={githubicon} alt="github icon" width="70%" />
                </a>
              </li>
            </ul>
          </div>
          <div className="proyect">
            <h3>Argentinian history quiz </h3>
            <img src={QuizProyect} alt="" width="40%" />
            <div className="Description-wrapper">
              <p>
                A fun and simple Javascript quiz to test your skills in
                Argentinian history.
              </p>
            </div>
            <ul>
              <li>
                <a href="https://quiz-historia-argentina.vercel.app/">
                  <img src={linkicon} alt="link icon" width="80%" />
                </a>
              </li>
              <li>
                <a href="https://github.com/GonzaloRodriguez1996/Quiz-Historia-Argentina">
                  <img src={githubicon} alt="github icon" width="70%" />
                </a>
              </li>
            </ul>
          </div>
        </Slider>
      </div>
    );
  }
}
