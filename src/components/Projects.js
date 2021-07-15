import React from 'react'
import {Container,Row,Button,Card, Col ,Carousel} from "react-bootstrap"

function Projects() {
    return (
      <Container id="projects">
        <Row className="AboutMe-Header">Projects</Row>
        <Row className="Row-Style">
          <Col lg={4} className="Row-Style">
            <Card style={{ width: "18rem" }} className="Card_Style">
              <Carousel fade>
                <Carousel.Item interval={2000}>
                  <img
                    className="d-block w-100"
                    src="AppToDo1.png"
                    alt="First slide"
                    style={{ width: "17rem", height: "14rem" }}
                  />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    className="d-block w-100"
                    src="AppToDo2.png"
                    alt="Second slide"
                    style={{ width: "17rem", height: "14rem" }}
                  />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    className="d-block w-100"
                    src="AppToDo3.png"
                    alt="Third slide"
                    style={{ width: "17rem", height: "14rem" }}
                  />
                </Carousel.Item>
              </Carousel>

              {/* <Card.Img variant="top" src="ToDOList.png" style={{ width: '17rem',height:'14rem'}}/> */}
              <Card.Body className="CardBody">
                <Card.Title>ToDoList</Card.Title>
                <Card.Text>
                  It is a React application that helps to schedule projects and
                  daily tasks.<br></br>
                  Tools: React JS,React hooks,React Redux . Click{" "}
                  <a className="url" href="https://github.com/ibmo419/ToDoApp2" 
                  target="_blank" rel="noopener noreferrer">
                    here
                  </a>{" "}
                  to see code .
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
              <Carousel fade>
                <Carousel.Item interval={2000}>
                  <img
                    className="d-block w-100"
                    src="Quiz-App.png"
                    alt="First slide"
                    style={{ width: "17rem", height: "14rem" }}
                  />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    className="d-block w-100"
                    src="Quiz-App2.png"
                    alt="Second slide"
                    style={{ width: "17rem", height: "14rem" }}
                  />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    className="d-block w-100"
                    src="Quiz-App3.png"
                    alt="Third slide"
                    style={{ width: "17rem", height: "14rem" }}
                  />
                </Carousel.Item>
              </Carousel>

              {/* <Card.Img variant="top" src="Quiz-App.png" style={{ width: '17rem',height:'14rem'}}/> */}
              <Card.Body className="CardBody">
                <Card.Title>Quiz App</Card.Title>
                <Card.Text>
                  It is a front-end application,created for everyone who want to
                  take quizzes.<br></br>
                  Tools: React JS,React hooks,React Bootstrap . Click{" "}
                  <a className="url" href="https://github.com/ibmo419/Quiz-App" 
                  target="_blank" rel="noopener noreferrer">
                    here
                  </a>{" "}
                  to see code .
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
            <Card style={{ width: "18rem" }} className="Card_Style">
              <Carousel fade>
                <Carousel.Item interval={2000}>
                  <img
                    className="d-block w-100"
                    src="Calculator.png"
                    alt="First slide"
                    style={{ width: "17rem", height: "14rem" }}
                  />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    className="d-block w-100"
                    src="Calculator2.png"
                    alt="Second slide"
                    style={{ width: "17rem", height: "14rem" }}
                  />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    className="d-block w-100"
                    src="Calculator3.png"
                    alt="Third slide"
                    style={{ width: "17rem", height: "14rem" }}
                  />
                </Carousel.Item>
              </Carousel>

              
              <Card.Body className="CardBody">
                <Card.Title>Calculator App</Card.Title>
                <Card.Text>
                  It is a front-end application,an online calculator for quik
                  calculations.<br></br>
                  Tools: React JS,CSS Grid,React Redux . Click{" "}
                  <a
                    className="url"
                    href="https://github.com/ibmo419/Calculator-App"
                    target="_blank" rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  to see code .
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
