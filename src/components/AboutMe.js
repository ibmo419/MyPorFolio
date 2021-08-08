import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone ,faEnvelope} from "@fortawesome/free-solid-svg-icons"
import BasicSpeedDial from "./Speed-Dial"


function AboutMe() {
    return (
        <Container className="AboutMe-container" id="aboutMe">
            <Row className="AboutMe-Header">
                About Me
            </Row>
            <Row className="AboutMe-content">
                <Col md={4} className="Image-position">
                    <div>
                        <img src="MyPhoto.jpg" alt="MohamedAli.jpg" className="Image-style"></img>
                        <p> Mohamed Ali IBEN HADJ AMOR</p>
                        <div className="info-style">
                            <FontAwesomeIcon icon={faPhone} className="info" />
                            <p> +216 23 318 035</p>
                        </div>
                        <div className="info-style">
                            <FontAwesomeIcon icon={faEnvelope} className="info" />
                            <p>hadjamor.medali@gmail.com</p>
                        </div>
                        <div>
                            <BasicSpeedDial />
                        </div>

                    </div>

                </Col>
                <Col md={8}>
                    <p>
                        Good day , My name is Mohamed Ali , i am exicted to tell you my professional story briefly ,
                    </p>
                    <p>
                        <span> In 2013 / 2015 : </span> I studied 2 years preparatory to engineering studies at <a className="url" href="http://www.ipeim.rnu.tn/" target="_blank" rel="noopener noreferrer">IPEIM</a> with Specialty : mathematics and physics .
                        <br></br>
                        <span>In 2015 / 2018 : </span> I studied industrial engineering with quality management expertise at <a className="url" href="http://enib_bizerte.byethost18.com/?i=1" target="_blank" rel="noopener noreferrer">ENIB</a> .
                    </p>
                    <p> </p>
                    <p><span>In 2018 / 2021 : </span> i worked as a Continuous Improvement Engineer in <a className="url" href="https://www.leoni.com/en/" target="_blank" rel="noopener noreferrer">LEONI Wiring Systems</a> .The main mission was :
                        Quality Improvement : detection of non-compliance and resolution of quality problems,
                        anticipation of quality risks of new projects, implementation of preventive and curative actions .</p>
                    <p>
                        After that , i decided to make a change into Software Quality Assurance.
                        Because,i am always passionate about Quality management and  computer science too, and I was always following up on the latest news
                        in technologies and in the IT industry .
                        
                    </p>
                    <p>
                        First of all : i made an initiation into IT field through a web development training with GoMyCode.<br></br>
                        Secondly : i am doing a training to specialize in Software Quality Assurance with <a className="url" href="http://www.corp.tn/" target="_blank" rel="noopener noreferrer">CORP</a>.
                    </p>
                    <p>
                        And now i am looking for a new job as a QA Software Engineer  to start a new career that inspires me a lot.
                        I am constantly learning new things , currently those things include gaining more experience with front development tools like
                        Reactjs and testing tools like Selenuim .
                    </p>
                </Col>
            </Row>

        </Container>
    )
}

export default AboutMe
