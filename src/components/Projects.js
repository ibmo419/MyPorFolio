import React from 'react'
import {Container,Row,Button,Card, Col} from "react-bootstrap"

function Projects() {
  return (
    <Container id="projects">
      <Row className="AboutMe-Header">Projects</Row>
      <Row className="Row-Style">
        <Col lg={4} className="Row-Style">
          <Card style={{ width: "18rem" }} className="Card_Style">
            <Card.Img variant="top" src="./projectsCapt/AppToDo2.png" style={{ height: "14rem" }} />
            <Card.Body className="CardBody">
              <Card.Title>ToDoList</Card.Title>
              <Card.Text>
                It is a React application that helps to schedule projects and
                daily tasks.<br></br>
                Tools: React JS,React hooks,React Redux .
              </Card.Text>
              <Button
                variant="primary"
                href="https://to-do-app-2.herokuapp.com/"
                target="_blank" rel="noopener noreferrer"
              >
                View App
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="Row-Style">
          <Card style={{ width: "18rem" }} className="Card_Style">
            <Card.Img variant="top" src="./projectsCapt/Quiz-App3.png" style={{ height: "14rem" }} />
            <Card.Body className="CardBody">
              <Card.Title>Quiz App</Card.Title>
              <Card.Text>
                It is a front-end application,created for everyone who want to
                take quizzes.<br></br>
                Tools: React JS,React hooks,React Bootstrap .
              </Card.Text>
              <Button
                variant="primary"
                href="https://quizz-app-12.herokuapp.com/"
                target="_blank" rel="noopener noreferrer"
              >
                View App
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="Row-Style">
          <Card
            style={{ width: "18rem" }}
            className="Card_Style">
            <Card.Img
              variant="top"
              src="./projectsCapt/Calculator3.png"
              style={{ height: "14rem" }} />
            <Card.Body className="CardBody">
              <Card.Title>Calculator App</Card.Title>
              <Card.Text>
                It is a front-end application,an online calculator for quik
                calculations.<br></br>
                Tools: React JS,CSS Grid,React Redux .
              </Card.Text>
              <Button
                variant="primary"
                href="https://calculator-1000.herokuapp.com/"
                target="_blank" rel="noopener noreferrer"
              >
                View App
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects
