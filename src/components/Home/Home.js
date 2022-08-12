import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ND.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  
  return (
  <div>
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Nnamdi Raymond</strong>
              </h1>
              <h3> Web Developer | Computer scientist</h3>

              <p className="heading-description blockquote">
                A highly skilled and movtivated web developer who deliver best quality and scalable software for business.
              </p>

              <div className="heading-type">
                <TypeWriter />

                  <div className="button-key">
                    <button className="btn btn-primary">
                    <button>Download Cv</button>
                    <span className="spinner-border spinner-border-sm"></span>
                    </button>
                  </div>
              </div>
            </Col>

            <Col md={5}>
              <div className="img">
                <img src={myImg} className="profile-pic" alt="handle" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
              
                <strong>Feel free to connect with me</strong>
                </p>
              
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  </div>
  );
}

export default Home;
