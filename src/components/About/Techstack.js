import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs } from "react-icons/si";

// Tech Icons
import Cpp from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Cpp} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="TypeScript" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" />
        <div className="tech-icons-text">React.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs size={28} />
        <div className="tech-icons-text">Next.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="Tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      {/* Backend */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node.js" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="PostgreSQL" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>


      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="Firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>

    </Row>
  );
}

export default Techstack;
