import { faDatabase, faFileCode, faProjectDiagram, faTasks } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {Col, Container,Row} from "react-bootstrap"
import LinearProgress from "@material-ui/core/LinearProgress";
import Modal from 'react-bootstrap/Modal'
import {useState} from 'react'
import Card from 'react-bootstrap/Card'


function Skills() {
    const [modalShow, setModalShow] = useState(false);
    const [modelAction,setModelAction] = useState({
        src:"",
        model_title:""
    })
    function modelActions(param) {
        setModalShow(true);
        setModelAction({...modelAction,src:param.src,model_title:param.modal_title});
    }
const data={
    skills:
    [
        {
            title:"Front-End",
            description:[{skill:"React JS",score:60},{skill:"Bootstrap",score:90},{skill:"Material UI",score:90}],
        },
        {
            title:"Back-End",
            description:[{skill:"Node JS",score:40},{skill:"Express",score:40},{skill:"MongoDB",score:60},{skill:"MySQL",score:20}],
        },
        {
            title:"Programming languages",
            description:[{skill:"Javascript",score:80},{skill:"Java",score:30},{skill:"Python",score:40}],
        },
        {
            title:"Control&Software Testing",
            description:[{skill:"Selenuim",score:60},{skill:"Git/Github",score:70},{skill:"Postman",score:80},{skill:"Jira",score:50}],
        },
    ],
    services:[{
        title:"Front-end Development",
        icon:faFileCode,
        description:"Ability to develop and design web pages using react js."
    },
    {
        title:"Back-end Development",
        icon:faDatabase,
        description:"Ability to create the server side of an application and communications between the database and the browser."
    },
    {
        title:"Project Management ",
        icon:faProjectDiagram,
        description:"I have knowledge of agile project management and especially scrum methodology."
     },
     {
        title:"Software Testing ",
        icon:faTasks,
        description:"Ability to analyse customer requirements, define the test scenarios ,detect errors and bugs."
     }

    ],
    cetificates:[{
        title:"React_Redux",
        src:"Cert1.jpg",
        modal_title:"React_Redux Certificate",
        id:1
    },
    {
        title:"Java",
        src:"Cert2.png",
        modal_title:"Java Certificate",
        id:2
    },
    {
        title:"Six_Sigma Green Belt",
        src:"Cert3.jpg",
        modal_title:"Six_Sigma Green Belt Certificate",
        id:3
    },
    {
        title:"Full_Stack js development",
        src:"Cert4.jpg",
        modal_title:"Full_Stack js develpment Certificate",
        id:4
    },
    {
        title:"Python",
        src:"Cert6.png",
        modal_title:"Python Certificate",
        id:5
    },
    {
        title:"Project Management",
        src:"Cert5.jpg",
        modal_title:"Project Management certificate",
        id:6
    },
    {
        title:"Scrum Fundamentals",
        src:"Cert7.jpg",
        modal_title:"Scrum Fundamentals certificate",
        id:7
    },
    {
        title:"SQL",
        src:"Cert8.png",
        modal_title:"SQL certificate",
        id:8
    },

    
]
    
} 

    return (
        <Container id="skills">
            <Row className="AboutMe-Header">
                Skills
            </Row>
            <Row >
               <span className="title-style">My services :</span>
            </Row>
            <Row className="sevices_row_style">
                {data.services.map((el)=>(
                <Col  className="services_col_style">
                <FontAwesomeIcon icon={el.icon} size="3x" style={{color:'black'}}/>
                <span>{el.title}</span>
                <p>{el.description}</p>
                
                </Col>))}
            </Row>
            <Row>
                {data.skills.map((el)=>(
                 <Col className="skillsBox_style" sm={3}>
                 <span className="title-style">{`${el.title}:`}</span>
                 
                     {el.description.map((cnt)=>(
                         <div className="skills_style">
                             <span>{cnt.skill}</span>
                             <LinearProgress variant="determinate" 
                       value={cnt.score} 
                       color="secondary"
                       />
                         </div>
                     ))}
                 </Col>

                ))}
            </Row>
            <Row >
               <span className="title-style">My certificates :</span>
            </Row>
            <Row
            >
                {
                    data.cetificates.map((el,index)=>(
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

        </Container>
    )
}

export default Skills
