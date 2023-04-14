/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
import { useState } from 'react';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledAlert
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { sassTrue } from "sass";
// import { setMaxListeners } from "gulp";

export default function Contact() {

// class Contact extends React.Component {

  const [inputFields, setInputFields] = useState([
    { user_name: '', user_email: '', contact_number: '', company: '', message: '' }
  ])
  const [isOpened, setIsOpened] = useState(false);
  const [poCust, setpoCust] = useState(true);
  const [emailError, setEmail] = useState(false);

  const form = useRef();
  const state = {};
  const error = []
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
    isEmail(inputFields[index].user_email)
}
const isEmail =(val)=> {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regEmail.test(val)){
     console.log("Invalid Email")
      // return 'Invalid Email';
      setEmail(true)
    }
    else{
      setEmail(false)
    }
}
  const ContactFormSubmit = (e) => {
    e.preventDefault();
    // console.log(inputFields)
    emailjs.sendForm('service_bx9u2jk', 'template_ncss809', form.current, 'rQk4QXlz29UCXKZZy')
      .then((result) => {
          console.log(result.text);
  //         this.state = { isOpened: true };
  // this.state = { poCust: false };
          setpoCust(false)
    setIsOpened(true)
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
      <>
        <DemoNavbar />
        <main >
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="12">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white">
                      <div className="text-muted text-center">
                        <h2 className="mb-1">Want to work with us?</h2>
                      </div>
                     
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted">
                        {/* <small>Or sign in with credentials</small> */}
                      </div>
                     <section className="section pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center ">
                <Col className="pb-lg-6" lg="10">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                    {isOpened && (
                    <h3>Your contact request has been recorded and a member of the team will get back to you shortly.</h3>)}
                     {!isOpened && poCust && (  
                    <form ref={form} onSubmit={ContactFormSubmit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              
              <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Your name</label>
                            <Input placeholder="Mike" name='user_name' onChange={event => handleFormChange(index, event)} value={input.user_name} type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Email address</label>
                            <Input placeholder="mike@email.com" name='user_email' onChange={event => handleFormChange(index, event)} value={input.user_email} type="email" />
                          </FormGroup>
                          {emailError && ( 
                             <UncontrolledAlert color="danger" fade={false}>
                          <span className="alert-inner--text ml-1">
                           Please Enter A Valid E-Mail address
                           </span>
                          </UncontrolledAlert>
                          )}
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Phone</label>
                            <Input placeholder="+12 1234567890" name='contact_number' onChange={event => handleFormChange(index, event)} value={input.contact_number} type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Company</label>
                            <Input placeholder="My Work Place" name='company' onChange={event => handleFormChange(index, event)} value={input.company} type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Message</label>
                            <Input placeholder="I work as a Procurement head and would like to colab" name='message' onChange={event => handleFormChange(index, event)} value={input.message} type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                        onClick={ContactFormSubmit}
                        disabled={emailError}
                      >
                        Send text
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
            </div>
          )
        })}
      </form> )}
                     
                   
                    </CardBody>
                    
                  </Card>
                </Col>
        
                <Col className="pl-lg-8" md="6">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Our office address</h4>
                    <p>
                    128 City Road, <br />London,<br /> United Kingdom :EC1V 2NX
                    </p>
                  </div>
                </div>
                </Col>
                <Col className="" md="6">

                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-email-85" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Drop us a Mail</h4>
                    <p>
                    <a href="mailto:subham@sugarbiz.co.uk">subham@sugarbiz.co.uk</a>
                    </p>
                  </div>
                </div>
              </Col>
              </Row>
            </Container>
          </section> 
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  
}

// export default Contact;
