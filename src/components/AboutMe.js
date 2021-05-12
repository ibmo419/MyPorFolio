import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone ,faEnvelope} from "@fortawesome/free-solid-svg-icons"


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
                    <p> hadjamor.medali@gmail.com</p>
                    </div>

                    </div>
                    
                </Col>
                <Col md={8}>
                <p>
                    Hello,My name is Mohamed Ali ,i am an industrial engineer graduated from the National Engineering School of Bizert in 2018 .
                </p>
                <p>
                    I worked ,from September 2018 to December 2020, as a Projetcs Engineer in <a className="url" href="https://www.leoni.com/en/">LEONI Wiring Systems</a>.
                </p>
                <p>
                After that ,i decided to make a career change into web development.
                </p><p>Indeed, it was a amazing experience with <a className="url" href="https://gomycode.tn/">GoMyCode training center</a> , which ended with the obtaining of my diploma in full stack JS development .
                </p>
                <p>
                   My dream is to find a new job in web development Engineering and to start a new career that inspires me a lot.
                </p>
                <p>
                    I am constantly learning new things ,currently those things include gaining more experience with React ,express JS ,Node JS and Mongo DB .
                </p>
            
                </Col>
            </Row>
            
        </Container>
    )
}

export default AboutMe
