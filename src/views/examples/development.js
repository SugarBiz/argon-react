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
  UncontrolledCarousel,
  UncontrolledTooltip
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import CarouselDev from "views/IndexSections/Carousel dev.js"
import * as constants from "assets/constants.js";

class Devlopment extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
 
  render() {
    const carouselItems = [
      {
        src: require("assets/img/brand/Strategy1.png"),
        altText: "Slide 1",
        caption: "Strategy Cious"
      },
      {
        src: require("assets/img/brand/Strategy2.png"),
        altText: "Slide 2",
        caption: "Right Direction"
      },
    ];
    return (
      <>
        <DemoNavbar />
        <main ref="main">
        <section className="section section-lg section-shaped pb-0">
              <div className="shape shape-style-1 shape-default">
              <span className="squares square1"/>
              <span className="squares square2"/>
              <span className="squares square3"/>
              <span className="squares square4"/>
              <span className="squares square5"/>
              <span className="squares square6"/>
              <span className="squares square7"/>
            </div>

            <CarouselDev />

          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Devlopment;
