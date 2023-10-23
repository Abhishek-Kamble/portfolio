import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, my name is <span className="purple">Abhishek </span>
            I'm from <span className="purple"> Pune, India.</span>
            <br />I have completed my B.Tech. in computer science and from WCE,
            Sangli, where I have developed a strong foundation in backend and
            frontend technologies. If you're interested in connecting or
            discussing potential collaborations, please feel free to reach out.
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
