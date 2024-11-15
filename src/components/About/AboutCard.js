import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, my name is{" "}
            <span className="purple">Abhishek Kamble</span>
            I'm from <span className="purple"> Pune (India).</span>
            <br />I graduated from{" "}
            <span className="purple">
              Walchand College of Engineering, Sangli
            </span>{" "}
            , with a degree in Computer Science in 2023. Currently, I am working
            as a
            <span className="purple">
              Software Engineer at Cornerstone OnDemand
            </span>
            , where I contribute to building scalable and impactful solutions.
            <br />
            I’m always open to connecting and exploring exciting opportunities
            for collaboration. Feel free to reach out!
            <br />
            Let's innovate and create together!
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Consistency is the key to success!"{" "}
          </p>
          <footer className="blockquote-footer">Abhishek Kamble</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
