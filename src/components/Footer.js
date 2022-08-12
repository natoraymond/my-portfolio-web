import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../components/SocialMedia";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Developed by Nnamdi Raymond</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} </h3>
          </Col>
          <Col md="4" className="footer-body">
            <SocialMedia />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
