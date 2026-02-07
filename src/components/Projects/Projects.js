import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/aahar.png";
import emotion from "../../Assets/Projects/weather.png";
import editor from "../../Assets/Projects/resume-analyzer.png";
import chatify from "../../Assets/Projects/chatify.png";



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
              title="Chat Message App"
              description="Building a modern real-time chat messaging app with a clean and interactive UI, inspired by platforms like ChatGPT. The app features a responsive design, user avatars, file uploads, and smooth scrolling, ensuring a seamless chat experience."
              ghLink="https://github.com/tripathiaditya21/chat-message-app-"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Aahaar Setu"
              description="Aahaar Setu is a web platform that connects food donors with those in need, helping to reduce food waste and combat hunger in communities. Built with modern web technologies and a focus on user experience, it serves as a bridge between surplus food and hunger."
              ghLink="https://github.com/tripathiaditya21/ahaar-setu"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Resume Analyzer and Job Scrapper"
              description="Developed an advanced AI application that leverages Retrieval-Augmented Generation (RAG), Large Language Models (LLM), and Groq’s LLaMA 3 model for comprehensive resume analysis"
              ghLink="https://github.com/tripathiaditya21/Resume-Analyzer-and-Job-Scrapper"
                       
            />
          </Col>

        
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Geolocation Weather App"
              description="A modern, responsive weather application that provides real-time weather information based on your location or city search. The app features a beautiful, dynamic user interface that adapts to current weather conditions and time of day."
              ghLink="https://github.com/tripathiaditya21/geolocation-weather-app-"
                   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
