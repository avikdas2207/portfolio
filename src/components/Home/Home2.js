import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import moment from "moment";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { MdOutlineCss } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";

function Home2() {
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const calculateAge = (birthDate) => {
    const birth = moment(birthDate, "YYYY-MM-DD");
    const now = moment();
    const years = now.diff(birth, "years");
    birth.add(years, "years");
    const months = now.diff(birth, "months");
    console.log(years, months);
    setYear(years);
    setMonth(months);
    return { years, months };
  };

  useEffect(() => {
    calculateAge("2021-02-22");
  }, []);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Welcome to my portfolio website. I am a passionate and dedicated
              Software Developer with{" "}
              <b className="purple">
                {year}.{month}
              </b>{" "}
              years of experience in crafting user-centric web applications. My
              journey in web development has equipped me with a deep
              understanding of the modern web ecosystem and a keen eye for
              detail.
              <br />
              <h4 style={{ fontSize: "1.5em" }}>
                My <sppan className="purple">Expertise</sppan>
              </h4>
              <br />I specialize in building robust and scalable web
              applications using the latest technologies and frameworks. Here
              are the key languages and tools I work with:
              <br />
              <br />
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                className="purple col-md-12"
              >
                <div>
                  <FaReact /> React Js
                </div>
                <div>
                  <SiNextdotjs /> Next Js
                </div>
                <div>
                  <IoLogoJavascript /> JavaScript
                </div>
                <div>
                  <SiTypescript /> Typescript
                </div>
                <div>
                  <MdOutlineCss /> Tailwind Css
                </div>
                <div>
                  <FaHtml5 /> HTML5
                </div>
              </div>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/avikdas2207"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/AvikDas284402"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/avik-das-558086141/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
