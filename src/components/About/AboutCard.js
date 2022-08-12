import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    
    <div>
        <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple"> Nnamdi Raymond</span>
            from  <span className="purple"> Nigeria.</span>
              <br />
              Software Engineer who loves to transform ideas into reality using
              code.
              <br />
                I am a web developer who is passionated in programming and solving complex algorithm in to a simple solution and turns your design ideas into a live website to help your business grow faster using modern web technolgies with experience creating
              custom websites with ReactJs, JavaScript, HTML5, CSS3. nodejs, Firebase!
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <div>
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Playing Games
                </li>
                <li className="about-activity">
                  <ImPointRight /> Travelling
                </li>
                <li className="about-activity">
                  <ImPointRight /> Watching Movies
                </li>
              </ul>
            </div>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutCard;
