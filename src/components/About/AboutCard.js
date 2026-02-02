import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Dhanalakshmi J</span>{" "}
            from <span className="purple">Tamil Nadu</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Engineer</span> at{" "}
            <span className="purple">CorestratAI</span>.
            I hold an Integrated MCA{" "}
            {/* <span className="purple">Mathematics and Computing</span> from{" "}
            <span className="purple">BIT Mesra</span>. */}
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>           
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Songs and Reading Stories
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dhanalakshmi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
