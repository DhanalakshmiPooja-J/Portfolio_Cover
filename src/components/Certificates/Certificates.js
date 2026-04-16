import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import UIUX from "../../Assets/certificate/UIUX.png";
import Canva from"../../Assets/certificate/canva.png";
import CanvaVideo from "../../Assets/certificate/canvaVideo.png";
import Shopify from "../../Assets/certificate/shopify.png";
import GenerativeAI from "../../Assets/certificate/generativeAI.png";
import Prompt from "../../Assets/certificate/chatgpt.png";



function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certifications I’ve recently completed.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UIUX}
              title="UI/UX Design"
              demoLink="https://coursera.org/share/c20b9637563bda67db5c13714c20e030"     
             />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Prompt}
              isBlog={false}
              title="Prompt Engineering "
              demoLink="https://coursera.org/share/a8f9ab4e37828610fcea4406221c7165"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GenerativeAI}
              isBlog={false}
              title="Generative AI"
              demoLink="https://coursera.org/share/79abdca085a0125bf3a261907a146ade"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Canva}
              isBlog={false}
              title="Canva For Social Media"         
              demoLink="https://coursera.org/share/e42543d8ef1f456cdd4827654d795794"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CanvaVideo}
              isBlog={false}
              title="Website Video with Canva"            
              demoLink="https://coursera.org/share/ccbe3a3675cdb9a0ba030d4db6322da4"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shopify}
              isBlog={false}
              title="E-Commerce with Shopify"           
              demoLink="https://coursera.org/share/15f5b774ddae84f378b625371cfa1242"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates