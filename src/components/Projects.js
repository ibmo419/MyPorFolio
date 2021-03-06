import React from 'react'
import {Container,Row,Button,Card, Col} from "react-bootstrap"

function Projects() {
  return (
    <Container id="projects">
      <Row className="AboutMe-Header">Projects</Row>
      <Row className="Row-Style">
      <Col lg={4} className="Row-Style">
          <Card style={{ width: "18rem",height:"30rem" }} className="Card_Style">
            <Card.Img variant="top" src="./projectsCapt/movie_app.jpg" style={{ height: "14rem" }} />
            <Card.Body className="CardBody">
              <Card.Title>Movie_App</Card.Title>
              <Card.Text>
                It is a React application that helps to manage the favorite movies and watch them by a simple click.<br></br>
                Tools: React JS,Reactstrap,React Hooks.
              </Card.Text>
              <Button
                variant="primary"
                href="https://movie-app419.herokuapp.com/"
                target="_blank" rel="noopener noreferrer"
              >
                View App
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="Row-Style">
          <Card style={{ width: "18rem",height:"30rem" }} className="Card_Style">
            <Card.Img variant="top" src="./projectsCapt/AppToDo2.png" style={{ height: "14rem" }} />
            <Card.Body className="CardBody">
              <Card.Title>ToDoList</Card.Title>
              <Card.Text>
                It is a React application that helps to schedule projects and
                daily tasks.<br></br>
                Tools: React JS,React hooks .
              </Card.Text>
              <Button
                variant="primary"
                href="https://to-do-app-02.herokuapp.com/"
                target="_blank" rel="noopener noreferrer"
              >
                View App
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="Row-Style">
          <Card style={{ width: "18rem" ,height:"30rem"}} className="Card_Style">
            <Card.Img variant="top" src="./projectsCapt/Quiz-App3.png" style={{ height: "14rem" }} />
            <Card.Body className="CardBody">
              <Card.Title>Quiz App</Card.Title>
              <Card.Text>
                It is a front-end application,created for everyone who want to
                take quizzes.<br></br>
                Tools: React JS,React hooks,ReactStrap .
              </Card.Text>
              <Button
                variant="primary"
                href="https://quiz-app-01.herokuapp.com/"
                target="_blank" rel="noopener noreferrer"
              >
                View App
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="Row-Style">
          <Card
            style={{ width: "18rem",height:"30rem"  }}
            className="Card_Style">
            <Card.Img
              variant="top"
              src="./projectsCapt/weather_app.jpg"
              style={{ height: "14rem"}} />
            <Card.Body className="CardBody">
              <Card.Title>Weather App</Card.Title>
              <Card.Text>
                It is a front-end application, useful in searching current weather informations of any country around the world.<br></br>
                Tools: React_Redux,Axios .
              </Card.Text>
              <Button
                variant="primary"
                href="http://weather-app419.herokuapp.com/"
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
