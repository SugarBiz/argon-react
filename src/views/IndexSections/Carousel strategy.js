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
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/brand/Strategy1.png"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/brand/Strategy2.png"),
    altText: "",
    caption: "",
    header: ""
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
          <span className="squares square1"/>
              <span className="squares square2"/>
              <span className="squares square3"/>
              <span className="squares square4"/>
              <span className="squares square5"/>
              <span className="squares square6"/>
              <span className="squares square7"/>
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="6">
                <h1 className="text-white font-weight-light">
                Plan Something
                </h1>
                <p className="lead text-white mt-4 textJustify">
                It is important to note that our consultants have experience working in a variety of sectors, including health technology, retail, supply chain, as well as government. Not only have we provided consulting services, but also assisted them in setting up their business from scratch.
                <br/>
                Whenever possible, we at SugarBiz prefer to assist our clients personally. Alternatively, you are welcome to send us an email outlining your requirements via the online form and one of our consultants will get in touch with you once we receive your email.
                </p>
                <Button
                  className="btn-white mt-4"
                  color="default"
                  tag={Link} to="/Contact"
                >
                  Contact Us
                </Button>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
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
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Carousel;
