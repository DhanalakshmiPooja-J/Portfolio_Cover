import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weatherBG.png";
import art from "../../Assets/Projects/bakery.png";
import figma from "../../Assets/Projects/figmaBG.png";
import emp from "../../Assets/Projects/employee.png";

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
              imgPath={weather}
              isBlog={false}
              isDemo={true}
              title="Weather App"
              description="Weather Forecast Application built with React.js, Node.js, and MongoDB Atlas, featuring real-time weather updates, location-based forecasts, and dynamic data visualization with support for temperature trends and weather condition insights."
              ghLink="https://github.com/DhanalakshmiPooja-J/WeatherApp"
              demoLink="https://weather-app-pied-eight-54.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emp}
              isBlog={false}
              isDemo={true}
              title="Employee Management App"
              description="Employee Management App built with React.js, Node.js, and MongoDB Atlas, featuring efficient employee data handling, role-based access control, real-time updates, and support for CRUD operations, performance tracking, and organizational insights."
              ghLink="https://github.com/DhanalakshmiPooja-J/EmployeeManagementApp"
              demoLink="https://employee-management-app-hti2.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={art}
              isBlog={false}
              isDemo={false}
              title="E-commerce App"
              description="E-commerce Web Application for clay items and bakery products built with React.js and Python, featuring seamless product browsing, secure user authentication, and dynamic cart management with real-time order updates. Includes admin panel for product management, order tracking, along with integrated payment support and responsive UI for an enhanced shopping experience."
              ghLink="https://github.com/DhanalakshmiPooja-J/Artisan_Bakery"
              // demoLink=""     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={figma}
              isBlog={true}
              isDemo={true}
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
