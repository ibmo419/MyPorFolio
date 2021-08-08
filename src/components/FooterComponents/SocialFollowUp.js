import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons"


function SocialFollowUp() {
    return (
        <div className="social-container">
            <a href="https://www.facebook.com/hajamor.mohamedali" className="social" target="_blank" rel="noopener noreferrer">

                <FontAwesomeIcon icon={faFacebook} className="facebook" />
            </a>
            <a href="https://www.linkedin.com/in/ibn-hadj-amor-mohamed-ali/" className="social" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
            </a>
            <a href="https://github.com/ibmo419" className="social" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="linkedin" />
            </a>

        </div>
    )
}

export default SocialFollowUp
