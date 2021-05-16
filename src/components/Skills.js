import { faDatabase, faFileCode, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {Col, Container,Row} from "react-bootstrap"
import LinearProgress from "@material-ui/core/LinearProgress";


function Skills() {
const data={
    skills:
    [
        {
            title:"Front-End",
            description:[{skill:"React JS",score:70},{skill:"Javascript",score:80},{skill:"Bootstrap",score:90},{skill:"Material UI",score:70}],
        },
        {
            title:"Back-End",
            description:[{skill:"Node JS",score:70},{skill:"Express",score:80},{skill:"Mongoose",score:90}],
        },
        {
            title:"DataBases",
            description:[{skill:"Mongo DB",score:80},{skill:"SQL Server",score:70}],
        },
        {
            title:"Source-Control",
            description:[{skill:"GIT",score:80},{skill:"Github",score:80},{skill:"Scrum/Agile",score:90}],
        },
    
    ],
    services:[{
        title:"Front-end Development",
        icon:faFileCode,
        description:"I have the ability to develop and design web pages using react js."
    },
    {
        title:"Back-end Development",
        icon:faDatabase,
        description:"I can create the server side of an application and communications between the database and the browser."
    },
    {
        title:"Project Management ",
        icon:faProjectDiagram,
        description:"I have experience of 2 years in project management.I can lead projects using the agile scrum methodology."
     }

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
                <FontAwesomeIcon icon={el.icon} size="2x" style={{color:'black'}}/>
                <span>{el.title}</span>
                <p>{el.description}</p>
                
                </Col>))}
            </Row>
            <Row>
                {data.skills.map((el)=>(
                 <Col sm={3}>
                 <span className="title-style">{`${el.title}:`}</span>
                 
                     {el.description.map((cnt)=>(
                         <div className="skills_style">
                             <span>{cnt.skill}</span>
                             <LinearProgress variant="determinate" 
                       value={cnt.score} />

                         </div>
                     ))}
                 </Col>

                ))}
            </Row>

        </Container>
    )
}

export default Skills
