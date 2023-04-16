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
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { Link } from "react-router-dom";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
              <span className="squares square1"/>
              <span className="squares square2"/>
              <span className="squares square3"/>
              <span className="squares square4"/>
              <span className="squares square5"/>
              <span className="squares square6"/>
              <span className="squares square7"/>
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col pt-5 px-0">
                  <Row>
                    <Col lg="11">
                      <h1 className="display-3 text-white">
                      Digitising your business.{" "}
                        <span>A sustainable way of digital transformation</span>
                      </h1>
                      <p className="lead text-white textJustify">
                      We offer a dedicated team of consultants and developers that can assist you in strategizing and developing your business. It is our aim to grow your business in a sustainable manner so that they are both environmentally friendly and cost-effective.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                          Plan Something
                          </h6>
                          <p className="description mt-3 textJustify">
                          Our team of business specialists are always available to help you plan your business no matter which stage you are at in your business.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                            Vision
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            Strategy
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            Sustainable
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            to="/Consultation" tag={Link}
                            // onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Build Something
                          </h6>
                          <p className="description mt-3 textJustify">
                          Our team of developers help you build your business platform using technical expertise acquired from working for diverse clients across the globe.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              Software
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Website
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              App
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            to="/Development" tag={Link}
                            // onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Prepare Launch
                          </h6>
                          <p className="description mt-3 textJustify">
                          Our expert team will help you prepare for Launching your product among the target market and even guide you to boost it among the audience.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            to="/GTM-Strategy" tag={Link}
                            // onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
