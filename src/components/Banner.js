import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import photoKhanh from "../assets/img/photo_khanh.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../assets/css/Banner.css";

export const Banner = () => {
  const [loopNumer, setLoopNumer] = useState(0);
  const [isDeteling, setIsDeteling] = useState(false);
  const [text, setText] = useState("");
  const toRotate = ["FrontEnd Developer", "Boy Handsome"];
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const timerRun = 2000;
  useEffect(() => {
    let ticket = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticket);
  }, [text]);
  const tick = () => {
    let i = loopNumer % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeteling
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updateText);
    if (isDeteling) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeteling && updateText === fullText) {
      setIsDeteling(true);
      setDelta(timerRun);
    } else if (isDeteling && updateText === "") {
      setIsDeteling(false);
      setLoopNumer(loopNumer + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Khanh `}{" "}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    My goal is to develop a career in the software technology
                    field, where I can apply my knowledge and skills to
                    contribute to the success of the organization. I aspire to
                    work in a challenging environment where I can progress and
                    develop both personally and professionally.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={photoKhanh} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
