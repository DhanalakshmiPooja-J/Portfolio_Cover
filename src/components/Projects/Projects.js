import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/figmaBG.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Weather App"
              description="Weather Forecast Application built with React.js, Node.js, and MongoDB Atlas, featuring real-time weather updates, location-based forecasts, and dynamic data visualization with support for temperature trends and weather condition insights."
              ghLink="https://github.com/DhanalakshmiPooja-J/WeatherApp"
              demoLink="https://weather-app-pied-eight-54.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Employee Management App"
              description="Employee Management App built with React.js, Node.js, and MongoDB Atlas, featuring efficient employee data handling, role-based access control, real-time updates, and support for CRUD operations, performance tracking, and organizational insights."
              ghLink="https://github.com/DhanalakshmiPooja-J/EmployeeManagementApp"
              demoLink="https://employee-management-app-hti2.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="E-commerce App"
              description="E-commerce Web Application for clay items and bakery products built with React.js and Python, featuring seamless product browsing, secure user authentication, and dynamic cart management with real-time order updates. Includes an intuitive admin panel for product management, order tracking, and inventory control, along with integrated payment support and responsive UI for an enhanced shopping experience."
              ghLink="https://github.com/DhanalakshmiPooja-J/Artisan_Bakery"
              // demoLink="https://blogs.soumya-jit.tech/"     
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Figma Screens"
              description="Saree Collection UI/UX Design created in Figma, featuring an elegant interface for browsing traditional and modern sarees with intuitive navigation and rich product displays.
              Designed for a seamless shopping experience with responsive layouts, detailed product views, and aesthetically pleasing visuals inspired by ethnic fashion."
             
              demoLink="https://www.figma.com/design/DoTO8WYue3X8WCeu9svYkK/Styles---Colors?node-id=54-2&p=f&t=o1nq5VkWCUY44nDx-0"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
