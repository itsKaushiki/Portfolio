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
import expense from "../../Assets/Projects/expenseimg.png";
import invicta from "../../Assets/Projects/invicta.png";
import notes from "../../Assets/Projects/notesimg.png";
import stock from "../../Assets/Projects/stockimg.png";
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
              imgPath={notes}
              isBlog={false}
              title="NotesShala"
              description="MERN project to make sharing of notes easier. Notes of all branches and semesters are available here."
              ghLink="https://github.com/itsKaushiki/NotesShala"
              demoLink="https://notes-shala-eight.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker"
              description="Mern project to add,view and track personal expenses. Designed and developed this app using React for frontend and MongoDB Atlas for data storage."
              ghLink="https://github.com/itsKaushiki/expense_tracker"
              demoLink="https://expense-tracker-334h.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock_price"
              description="Machine Learning Project to predict Stock Prices using Python."
              ghLink="https://github.com/itsKaushiki/StockPrice_detector"
          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invicta}
              isBlog={false}
              title="Invicta Website"
              description="Team Collaboration to develop the official Invicta website.Frontend includes NextJs and its a MERN project."
              ghLink="https://github.com/itsKaushiki/quod-invicta-website/tree/main"
              demoLink="https://quod-invicta.vercel.app/"
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
