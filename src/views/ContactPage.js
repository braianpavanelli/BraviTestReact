import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "../components/Navbars/IndexNavbar.js";
import LandingPageHeader from "../components/Headers/LandingPageHeader.js";
import TransparentFooter from "../components/Footers/TransparentFooter.js";
import Contact from "../components/Contact.js";

function ContactPage() {

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  let { id } = useParams();

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader text="About this contact" />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <Contact id={id}/>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default ContactPage;
