import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Avik Das </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />
            I am currently employed as a senior software developer at K12 Techno
            Services.
            <br />
            I have completed MCA from Dr. B. C. Roy Engineering College and BCA
            from ABS Academy of Science, Technology and Management.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Riding
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Avik Das</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
