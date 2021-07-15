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
                    <FontAwesomeIcon icon={faPhone} className="info"/>
                    <p> +216 23 318 035</p>
                    </div>
                    <div className="info-style">
                    <FontAwesomeIcon icon={faEnvelope} className="info"/>
                    <p>hadjamor.medali@gmail.com</p>
                    </div>
                    <div>
                    <BasicSpeedDial />
                    </div>

                    </div>
                    
                </Col>
                <Col md={8}>
                <p>
                    Hello,My name is Mohamed Ali ,i am an industrial engineer graduated from the National Engineering School of Bizert in 2018 .
                </p>
                <p>
                    I works ,from November 2018 , as a Industrial Methods Engineer in <a className="url" href="https://www.leoni.com/en/" target="_blank" rel="noopener noreferrer">LEONI Wiring Systems</a>.
                </p>
                <p>
                    And ,i decided to make a career change into Software Testing.
                </p><p>Indeed, it was an amazing experience with <a className="url" href="https://gomycode.tn/" target="_blank" rel="noopener noreferrer">GoMyCode</a> , which  helped me to make an initiation into IT field through a web development training.
                       And an other training to specialize in Software Quality Assurance with <a className="url" href="http://www.corp.tn/" target="_blank" rel="noopener noreferrer">CORP</a> .
                </p>
                <p>
                   My dream is to find a new job as a AQ Software Engineer and to start a new career that inspires me a lot.
                </p>
                <p>
                    I am constantly learning new things ,currently those things include gaining more experience with Reactjs ,Node JS ,Selenuim and other testing tools .
                </p>
            
                </Col>
            </Row>
            
        </Container>
    )
}

export default AboutMe
