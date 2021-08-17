import React from 'react'
import {Container,Row} from "react-bootstrap"
import {useState} from "react"
import {Form,Button} from "react-bootstrap"
import emailjs from "emailjs-com"

function Contacts() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    disabled: true,
    emailsent: null,
  })

  const handlechange = (e) => {

    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setState({ ...state, [name]: value });
  }

  const sendEmail = (e) => {

    e.preventDefault()

    emailjs.sendForm("service_dzpwizl", "template_dcpfpjq", e.target, "user_zjqcT3EsnZkIJLqnIedcn")
      .then(() => {

        setState({
          disabled: true,
          emailsent: true
        });

      })
      .catch(() => {

        setState({
          disabled: false,
          emailsent: false
        });
      });
    setState({
      ...state,
      name: "",
      email: "",
      subject: "",
      message: "",
      disabled: true,
      emailsent: null,
    })
    e.target.reset();
  }

  return (
    <div className="contact-backround">
      <Container id="contacts">
        <Row className="AboutMe-Header">Contact Me</Row>
        <Form onSubmit={sendEmail} >
          <Form.Group>
            <Form.Label className="Form-Label" htmlFor="full-name">Your Name*</Form.Label>
            <Form.Control
              type="text"
              name="name"
              id="full-name"
              value={state.name}
              onChange={handlechange}
              style={{ background: "transparent" }}
              className="content-color"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="Form-Label" htmlFor="email">Your Email*</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={state.email}
              onChange={handlechange}
              style={{ background: "transparent" }}
              className="content-color"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="Form-Label" htmlFor="subject">Subject*</Form.Label>
            <Form.Control
              type="text"
              name="subject"
              value={state.subject}
              onChange={handlechange}
              style={{ background: "transparent" }}
              className="content-color"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="Form-Label" htmlFor="message">Message*</Form.Label>
            <Form.Control
              id="message"
              value={state.message}
              as="textarea"
              rows={3}
              onChange={handlechange}
              name="message"
              style={{ background: "transparent" }}
              className="content-color"
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={(state.name !== "" && state.subject !== "" && state.email !== "" && state.message !== "") ? false : true}>
            Send
          </Button>
          {state.emailsent === true && (
            <p className="d-inline success-msg">Email Sent</p>
          )}
          {state.emailsent === false && (
            <p className="d-inline err-msg">Email not Sent</p>
          )}
        </Form>
      </Container>
    </div>
  );
}

export default Contacts
