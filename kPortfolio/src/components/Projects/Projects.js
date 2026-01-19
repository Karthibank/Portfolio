import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Project images
import traffic from "../../Assets/Projects/Traffic.png";
import employee from "../../Assets/Projects/Employee.png";
import fraud from "../../Assets/Projects/FraudDetection.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I have worked on.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Traffic Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic}
              title="Traffic Management System Using IoT"
              description="An intelligent traffic management system that optimizes traffic flow using real-time sensor data, reducing congestion and improving road safety."
              tech="Arduino, RFID, LiDAR, Zigbee, AWS IoT, TensorFlow"
            />
          </Col>

          {/* Employee Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              title="Employee Management System"
              description="A Java-based application for managing employee records, payroll, and attendance with a secure and user-friendly interface."
              tech="Java, OOP, MySQL"
            />
          </Col>

          {/* Fraud Detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fraud}
              title="Fraud Detection in Transactions Using ML"
              description="A machine learning-based system that detects fraudulent transactions in real time by analyzing patterns and identifying anomalies."
              tech="Python, Scikit-learn, Pandas, NumPy"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
