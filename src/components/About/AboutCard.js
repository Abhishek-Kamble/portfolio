import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhishek Kamble </span>
            from <span className="purple"> Sangli (MH), India.</span>
            <br />I am a Final Year computer science undergraduate pursing B. Tech. Degree from Walchand College of Engineering, Sangli
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
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
