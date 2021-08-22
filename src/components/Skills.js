import { faDatabase, faFileCode, faProjectDiagram, faTasks } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {Col, Container,Row} from "react-bootstrap"
import Modal from 'react-bootstrap/Modal'
import {useState} from 'react'
import Card from 'react-bootstrap/Card'


function Skills() {
    const [modalShow, setModalShow] = useState(false);
    const [modelAction, setModelAction] = useState({
        src: "",
        model_title: ""
    })
    function modelActions(param) {
        setModalShow(true);
        setModelAction({ ...modelAction, src: param.src, model_title: param.modal_title });
    }
    const data = {
        skills:
            [
                {
                    ref: "./AppIcon/css_icon.png",
                    name:"CSS 3",
                    style:{
                        width:"100px",
                        height:"100px"
                    }
                },
                {
                    ref: "./AppIcon/html_icon.png",
                    name:"html 5",
                    style:{
                        width:"100px",
                        height:"100px"
                    }
                },
                {
                    ref: "./AppIcon/bootstrap_icon.png",
                    name:"bootstrap",
                    style:{
                        width:"100px",
                        height:"100px"
                    }
                },
                {
                    ref: "./AppIcon/javascript_icon.png",
                    name:"javascript",
                    style:{
                        width:"100px",
                        height:"100px"
                    }
                },
                {
                    ref: "./AppIcon/react_icon.png",
                    name:"Reactjs",
                    style:{
                        width:"100px",
                        height:"100px"
                    }
                },
                {
                    ref: "./AppIcon/nodejs_icon.png",
                    name:"nodejs",
                    style:{
                        width:"150px",
                        height:"110px"
                    }
                },
                {
                    ref: "./AppIcon/mongodb_icon.png",
                    name:"nodejs",
                    style:{
                        width:"100px",
                        height:"100px"
                    }
                },
                {
                    ref: "./AppIcon/mysql_icon.png",
                    name:"mysql",
                    style:{
                        width:"150px",
                        height:"150px"
                    }
                },
                {
                    ref: "./AppIcon/python_icon.png",
                    name:"mysql",
                    style:{
                        width:"150px",
                        height:"150px"
                    }
                },
                {
                    ref: "./AppIcon/git_icon.png",
                    name:"git",
                    style:{
                        width:"150px",
                        height:"150px",
                    }
                },
                {
                    ref: "./AppIcon/github_icon.png",
                    name:"github",
                    style:{
                        width:"90px",
                        height:"90px",
                    }
                },
                {
                    ref: "./AppIcon/heroku_icon.png",
                    name:"heroku app",
                    style:{
                        width:"130px",
                        height:"100px",
                    }
                },
                {
                    ref: "./AppIcon/testlink_icon.png",
                    name:"Testlink",
                    style:{
                        width:"160px",
                        height:"150px",
                    }
                },
                {
                    ref: "./AppIcon/TestRail_icon.png",
                    name:"TestRail",
                    style:{
                        width:"140px",
                        height:"140px",
                    }
                },
                {
                    ref: "./AppIcon/jira_icon.jpg",
                    name:"Jira Software",
                    style:{
                        width:"250px",
                        height:"160px",
                    }
                },
                {
                    ref: "./AppIcon/postman_icon.jpg",
                    name:"Postman",
                    style:{
                        width:"250px",
                        height:"130px",
                    }
                },     
                 {
                    ref: "./AppIcon/uml_icon.png",
                    name:"Postman",
                    style:{
                        width:"200px",
                        height:"130px",
                    }
                },  
                {
                    ref: "./AppIcon/testpad_icon.jpg",
                    name:"Postman",
                    style:{
                        width:"220px",
                        height:"100px",
                    }
                },    
                {
                    ref: "./AppIcon/jmeter_icon.png",
                    name:"Jmeter",
                    style:{
                        width:"220px",
                        height:"100px",
                    }
                },    
            ],
        services: [{
            title: "Front-end Development",
            icon: faFileCode,
            description: "Ability to develop and design web pages using react js."
        },
        {
            title: "Back-end Development",
            icon: faDatabase,
            description: "Ability to create the server side of an application and communications between the database and the browser."
        },
        {
            title: "Project Management ",
            icon: faProjectDiagram,
            description: "I have knowledge of agile project management and especially scrum methodology."
        },
        {
            title: "Software Testing ",
            icon: faTasks,
            description: "Ability to analyse customer requirements, define the test scenarios ,detect errors and bugs."
        }

        ],
        cetificates: [{
            title: "React_Redux",
            src: "./certCapt/Cert1.jpg",
            modal_title: "React_Redux Certificate",
            id: 1
        },
        {
            title: "Java",
            src: "./certCapt/Cert2.png",
            modal_title: "Java Certificate",
            id: 2
        },
        {
            title: "Six_Sigma Green Belt",
            src: "./certCapt/Cert3.jpg",
            modal_title: "Six_Sigma Green Belt Certificate",
            id: 3
        },
        {
            title: "Full_Stack js development",
            src: "./certCapt/Cert4.jpg",
            modal_title: "Full_Stack js develpment Certificate",
            id: 4
        },
        {
            title: "Python",
            src: "./certCapt/Cert6.png",
            modal_title: "Python Certificate",
            id: 5
        },
        {
            title: "Project Management",
            src: "./certCapt/Cert5.jpg",
            modal_title: "Project Management certificate",
            id: 6
        },
        {
            title: "Scrum Fundamentals",
            src: "./certCapt/Cert7.jpg",
            modal_title: "Scrum Fundamentals certificate",
            id: 7
        },
        {
            title: "SQL",
            src: "./certCapt/Cert8.png",
            modal_title: "SQL certificate",
            id: 8
        },


        ]

    }

    return (
        <Container id="skills">
            <Row className="AboutMe-Header">
                Skills
            </Row>
            <Row className="skills_row_style">
                {data.skills.map((el) => (
                    <Col className="skillsBox_style" >
                       <img className="zoom-in" src={el.ref} alt={el.name}
                        style={el.style}
                       ></img>
                    </Col>
                ))}
            </Row>
            <Row >
                <span  className="title-style">My certificates :</span>
            </Row>
            <Row
            >
                {
                    data.cetificates.map((el, index) => (
                        <Col
                            key={index}
                            className="skillsBox_style"
                        >
                            <Card style={{ width: '15rem' }} className="CardBody">
                                <Card.Img variant="top" src={el.src} />
                                <Card.Body style={{ padding: '0' }}>
                                    <Card.Link onClick={() => modelActions(el)} >{el.title}</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                <Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {modelAction.model_title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={modelAction.src}
                            alt={modelAction.model_title}
                            className="img-fluid"
                        ></img>
                    </Modal.Body>
                </Modal>

            </Row>
            <Row >
                <span className="title-style">My services :</span>
            </Row>
            <Row className="sevices_row_style">
                {data.services.map((el) => (
                    <Col className="services_col_style">
                        <FontAwesomeIcon icon={el.icon} size="3x" style={{ color: 'black' }} />
                        <span>{el.title}</span>
                        <p>{el.description}</p>

                    </Col>))}
            </Row>

        </Container>
    )
}

export default Skills
