import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import wcehub from "../../Assets/Projects/wcehub.png";
import wceconnects from "../../Assets/Projects/wceconnects.png";
import covid from "../../Assets/Projects/covid.jpeg"
import pace from "../../Assets/Projects/pace.png"

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
              imgPath={wcehub}
              isBlog={false}
              title="WCE-Hub"
              description="• Designed and developed a real-time central events and activities
              publishing website for college campus.
              • Features: Multi-role users, unique likes & comments, Google OAuth sign in facility, enhanced security using JWT etc."
              link="https://github.com/Abhishek-Kamble/WCE-Hub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wceconnects}
              isBlog={false}
              title="WCE-Connects"
              description="• WCE-Connects is a web platform to connect alumni of WCE.
              • Worked with AWS-SES for integration with back-end to send bulk
              and transaction mails to users.
              • Created highly secured news forum for regular updates and newsletter mailing system."
              link="https://github.com/Abhishek-Kamble/WCE-Connects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="COVID Center Administration System"
              description="Created a CLI app to efficiently store, retrieve and update data
              into DB using Java and SQL.
              • Facilities: Management of nurses, doctors, patients, generating
              patient reports and checking bed availability etc."
              link="https://github.com/Abhishek-Kamble/COVID-Java-SQL"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pace}
              isBlog={false}
              title="WCE PACE Official Website"
              description="Created a fully functional Mobile responsive website for WCE Personality Advancement Circle of Engineers (PACE) integrated with a payment gateway for Event registrations using HTML, CSS, JavaScript and we have also used bootstrap, jQuery & Google Maps API."
              link="http://wcepace.org.in"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
