import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import './About.css';  // Import the CSS file for additional styling

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="justify-content-center" style={{ padding: "10px" }}>
          <Col
            md={8}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.5em", paddingBottom: "20px", textAlign: "center" }}>
              About <strong className="purple">ME</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <h1 className="project-heading">
              Professional <strong className="purple">Skillset</strong>
            </h1>
          </Col>
        </Row>
        <Techstack />
        <Row>
          <Col className="text-center">
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I use
            </h1>
          </Col>
        </Row>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
