import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import w3band from "../assets/img/w3band.png";
import bonjourPlayfair from "../assets/img/bonjourPlayfair.png";
import UiRepublic from "../assets/img/UiRepublic.png";
import UIRepulicinfor from "../assets/img/UIRepulic infor.png";
import zalomini from "../assets/img/zalomini.png";
import startex from "../assets/img/startex.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../assets/css/Projects.css";
export const Projects = () => {
  const projects = [
    {
      title: "W3Band",
      description: "Ticket booking -  Customer feedback reception",
      imgUrl: w3band,
      gitHud: "https://github.com/baokhanh24/w3_band",
    },
    {
      title: "Bonjour Playfair",
      description: "E-commerce website",
      imgUrl: bonjourPlayfair,
      gitHud: "https://github.com/baokhanh24/BonjourPlayfair",
    },
    {
      title: "Ui Republic",
      description: "E-commerce website",
      imgUrl: UiRepublic,
      gitHud: "https://github.com/baokhanh24/UiRepublicc",
    },
    {
      title: "UIRepulic",
      description: "The page contains no information of the page",
      imgUrl: UIRepulicinfor,
      gitHud: "https://github.com/baokhanh24/UIRepulicinfor",
    },
    {
      title: "ZaloMiNi",
      description: "Manage questions",
      imgUrl: zalomini,
      gitHud: "https://github.com/baokhanh24/zalomini",
    },
    {
      title: "StartEX",
      description: "The page contains no information of the page",
      imgUrl: startex,
      gitHud: "https://github.com/baokhanh24/Sample_test_E",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Below are the products that I have accomplished during my
                    learning and working process. All designs are
                    research-oriented and educational
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p></p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p></p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
