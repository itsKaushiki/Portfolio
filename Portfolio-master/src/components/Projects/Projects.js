import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blood from "../../Assets/Projects/blood.png";
import chat from "../../Assets/Projects/chat.png";
import gdsc from "../../Assets/Projects/gdsc.png";
import travel from "../../Assets/Projects/travel.png";
import weather from "../../Assets/Projects/weather.png";
import codepen from "../../Assets/Projects/codepen.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat-React-App"
              description="Chat App to share messages and images among registered users."
              ghLink="https://github.com/itsKaushiki/ChatReactApp"
              demoLink="https://6624a411427b5f723530f48e--precious-blancmange-8bd8b0.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blood}
              isBlog={false}
              title="BloodLink"
              description="A site designed to make blood donation easier by using google maps to locate nearest blood bank."
              ghLink="https://github.com/BloodLink-NIT-Jamshedpur/BloodLink-1"
              demoLink="https://cheerful-gaufre-eafe54.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gdsc}
              isBlog={false}
              title="GDSC NIT JSR website"
              description="The  official website of GDSC NIT JSR. Contributed in the front end section of the website."
              ghLink="https://github.com/itsKaushiki/GDSCnitjsr_officalweb"
              demoLink="https://www.gdscnitjsr.in/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travelogue"
              description="Website to help plan out trips to different places."
              ghLink="https://github.com/itsKaushiki/Travelogue"
              demoLink="https://idyllic-pegasus-a185fc.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="WeatherApp"
              description="Using Weather Api for displaying temperature, humidity and wind speed in different cities."
              ghLink="https://github.com/itsKaushiki/weatherapp"
               demoLink="https://weatherapp-lilac-two.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codepen}
              isBlog={false}
              title="Codepen Clone"
              description="A codepen-clone made using react and css to make coding easier."
              ghLink="https://github.com/itsKaushiki/Codepen-clone"
               demoLink="codepen-clone-flax.vercel.app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
