import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "../components/Navbars/IndexNavbar.js";
import LandingPageHeader from "../components/Headers/LandingPageHeader.js";
import TransparentFooter from "../components/Footers/TransparentFooter.js";
import PeopleList from "../components/PeopleList.js"

function PeoplePage() {
  
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader text="This is your Agenda" />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <PeopleList />
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

export default PeoplePage;
