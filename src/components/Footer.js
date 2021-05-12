import React from 'react'
import {Row,Col, Container} from"react-bootstrap";
import SocialFollowUp from './FooterComponents/SocialFollowUp';

function Footer() {
    return (
        <footer  style={{backgroundColor:'black',bottom:0}}>
         <Container fluid>
              <Row className="justify-content-between p-2">
                  <Col className="b-0" style={{fontWeight:14,fontSize:14,color:"white"}} >
                      mohamed ali
                  </Col>
                  <Col className="b-0">
                      <SocialFollowUp/>
                  </Col>
                  <Col className="b-0 d-flex justify-content-end"  md={4} style={{fontWeight:14,fontSize:14,color:"white"}} >
                      copyrights ©2021,all rights reserved .
                  </Col>
              </Row>
         </Container>
            
        </footer>
    )
}

export default Footer
