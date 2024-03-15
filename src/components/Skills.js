import Js from "../assets/img/js.png";
import Css from "../assets/img/css.png";
import Html from "../assets/img/html.png";
import Reactjs from "../assets/img/reactjs.png";
import Bootstrap from "../assets/img/bootstrap.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import "../assets/css/Skills.css";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>The skills that I have learned during my learning process</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={Html} alt="Html" />
                  <h5>Html</h5>
                </div>
                <div className="item">
                  <img src={Css} alt="Css" />
                  <h5>Css</h5>
                </div>
                <div className="item">
                  <img src={Js} alt="Javascript" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={Reactjs} alt="Reactjs" />
                  <h5>Reactjs</h5>
                </div>
                <div className="item">
                  <img src={Bootstrap} alt="Bootstrap" />
                  <h5>Bootstrap</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
