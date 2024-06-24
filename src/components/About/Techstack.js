import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact } from "react-icons/di";
import { SiNextdotjs, SiTypescript, SiHtml5 } from "react-icons/si";
import { MdCss } from "react-icons/md";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdCss />
      </Col>
    </Row>
  );
}

export default Techstack;
