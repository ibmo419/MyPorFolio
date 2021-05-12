import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons"


function SocialFollowUp() {
    return (
        <div className="social-container">
            <a href="https://www.facebook.com/hajamor.mohamedali" className="social">
                
            <FontAwesomeIcon icon={faFacebook} className="facebook"/>
            </a>
            <a href="https://www.linkedin.com/in/ibn-hadj-amor-mohamed-ali/" className="social">
                <FontAwesomeIcon icon={faLinkedin} className="linkedin"/>
            </a>
            <a href="https://github.com/ibmo419" className="social">
                <FontAwesomeIcon icon={faGithub} className="linkedin"/>
            </a>

        </div>
    )
}

export default SocialFollowUp
