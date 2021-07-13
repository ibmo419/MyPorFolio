import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-scroll"

function navbar() {
    return (
      <>
        <nav className="navbar sticky-top navbar-expand-md navbar-light " style={{backgroundColor:"black"}}>
        <div className="container">
        <Link className="navbar-brand" style={{color:'orange',fontWeight:800,fontFamily:"Helvetica"}}>
            My PortFolio
        </Link>
        <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon  icon={faBars} style={{color:"#FFF"}}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link
               activeclass='active'
               to='home'
               spy="true"
               smooth="true"
               offset={-70}
               duration={1000}
              className="nav-link" >Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link
              activeclass='active'
              to='aboutMe'
              spy="true"
              smooth="true"
              offset={-70}
              duration={1000}
              className="nav-link" >About me
              </Link>

            </li>
            <li className="nav-item">
              <Link 
              activeclass='active'
              to='skills'
              spy="true"
              smooth="true"
              offset={-70}
              duration={1000}
              className="nav-link" >Skills</Link>
            </li>
            <li className="nav-item">
              <Link 
              activeclass='active'
              to='projects'
              spy="true"
              smooth="true"
              offset={-70}
              duration={1000}
              className="nav-link" >Projects</Link>
            </li>
            <li className="nav-item">
              <Link
              activeclass='active'
              to='contacts'
              spy="true"
              smooth="true"
              offset={-55}
              duration={1000}
              className="nav-link" >Contacts</Link>
            </li>
          </ul>
       </div>
       </div>
      </nav>
      </>
        )
}

export default navbar
