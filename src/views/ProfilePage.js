import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

// core components
import ExamplesNavbar from "../components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "../components/Headers/ProfilePageHeader.js";
import TransparentFooter from "../components/Footers/TransparentFooter.js";

function ProfilePage() {
  const [pills, setPills] = React.useState("1");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <div className="button-container">
              <Button className="btn-round" color="info" size="lg">
                Follow
              </Button>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip515203352"
                size="lg"
              >
                <i className="fab fa-linkedin"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                See my Profile
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip340339231"
                size="lg"
              >
                <i className="fab fa-github"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                Visit My Repositories
              </UncontrolledTooltip>
            </div>
            <h3 className="title">About me</h3>
            <h5 className="description">
              After a couple of time as owner of one business, I decided to find
              recolocation in the job market as a System Analyst. Since 2015 I
              keep my english with a kind fluence, I have foreigners clients
              daily in my business so I have worked for 9 months to an American
              client and had daily meetings. Also I have the American visa B1B2
              (Tourist and Business). Available to national and international
              trips. The time as manager of my own business got my skills high
              with people and business management. I believe that I can
              contribute with your business improvement.
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h4 className="title text-center">My Experiences</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills nav-pills-info"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        Consult
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        Programmers
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        Capgemine
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        Mazzatech
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "5" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("5");
                        }}
                      >
                        FCamara
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "6" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("6");
                        }}
                      >
                        HP
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "7" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("7");
                        }}
                      >
                        Chilli
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "8" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("8");
                        }}
                      >
                        BlueMaxx
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="2"></Col>
                      <Col md="8">
                        <Card>
                          <CardBody>
                            <CardTitle>
                              <h4>Consult Soluções</h4>
                            </CardTitle>
                            <CardSubtitle>
                              <h5>
                                Full Stack .NET Developer - Current from
                                FEB/2019
                              </h5>
                            </CardSubtitle>
                            <CardText>
                              Development of Projects in ASP.NET MVC 5 C#, DDD,
                              Entity Framework, Dependency Injection,
                              Automapper, Bootstrap, Jquery. Tax credit
                              calculation system, associated with ERP
                              Benner(Third National), Activity Reporting and
                              Work Order Management System, Agenda and Report
                              Expense, Control system and alert of tax
                              obligations and closings. Allocated in Araraquara/SP.
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="2"></Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="2"></Col>
                      <Col md="8">
                        <Card>
                          <CardBody>
                            <CardTitle>
                              <h4>Programmers</h4>
                            </CardTitle>
                            <CardSubtitle>
                              <h5>
                                .NET Developer Analyst - From JAN/2015 to
                                SEP/2015
                              </h5>
                            </CardSubtitle>
                            <CardText>
                              Development of Projects in ASP.NET C#, Maintenance
                              of legacy systems and development of new systems.
                              Requirements gathering both online and in person,
                              daily meetings with the client. American client
                              Press Ganey (Health Research Company) allocated at
                              Matão/SP.
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="2"></Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="2"></Col>
                      <Col md="8">
                        <Card>
                          <CardBody>
                            <CardTitle>
                              <h4>Capgemini CPM Braxis</h4>
                            </CardTitle>
                            <CardSubtitle>
                              <h5>
                                System Analyst .NET Engineer - From SEP/2014 to
                                FEB/2015
                              </h5>
                            </CardSubtitle>
                            <CardText>
                              Development of Projects in ASP.NET C#, responsible
                              for a system manager of careers and other systems
                              of Secretaria da Fazenda do Estado de São Paulo
                              (Government Finance Secretariat). Allocated in the
                              client at São Paulo
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="2"></Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills4">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="2"></Col>
                      <Col md="8">
                        <Card>
                          <CardBody>
                            <CardTitle>
                              <h4>Mazzatech</h4>
                            </CardTitle>
                            <CardSubtitle>
                              <h5>
                                Full Stack .NET Developer and Tec Leader - From
                                NOV/2013 to MAY/2014
                              </h5>
                            </CardSubtitle>
                            <CardText>
                              Analisys and Development of projects in ASP.NET
                              C#, Leader of a small team. Allocated in the
                              client Tel (Telecommunication) at São Paulo.
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="2"></Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills5">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="4"></Col>
                      <Col md="8">
                        <Card>
                          <CardBody>
                            <CardTitle>
                              <h4>FCamara - Consulting Services</h4>
                            </CardTitle>
                            <CardSubtitle>
                              <h5>
                                System Analyst .NET Engineer - From JUN/2013 to
                                NOV/2013
                              </h5>
                            </CardSubtitle>
                            <CardText>
                              Short Project in ASP.NET MVC C# allocated in the
                              client Magazine Luiza (Retail) at Franca/SP.
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="4"></Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills6">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="2"></Col>
                      <Col md="8">
                        <Card>
                          <CardBody>
                            <CardTitle>
                              <h4>Hewlett Packard Enterprise Services</h4>
                            </CardTitle>
                            <CardSubtitle>
                              <h5>
                                System Analyst .NET Developer - From NOV/2011 to
                                MAY/2013
                              </h5>
                            </CardSubtitle>
                            <CardText>
                              Maintenance and impruvement of systems ASP.NET C#
                              for the clients NET (Telecommunication) and Itaú
                              BBA (Financial) (.NET Framework 2.0 e 3.5).
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="2"></Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills7">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="2"></Col>
                      <Col md="8">
                        <Card>
                          <CardBody>
                            <CardTitle>
                              <h4>Chilli Communication and Advertisement</h4>
                            </CardTitle>
                            <CardSubtitle>
                              <h5>
                                Full Stack Web Developer - From MAY/2011 to
                                AUG/2011
                              </h5>
                            </CardSubtitle>
                            <CardText>
                              Development of websites and web applications
                              (ASP.NET C#, MySQL, Entity Framework, .NET
                              Framework 3.5 e 4.0)
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="2"></Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills8">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="2"></Col>
                      <Col md="8">
                        <Card>
                          <CardBody>
                            <CardTitle>
                              <h4>BlueMaxx - StartUp</h4>
                            </CardTitle>
                            <CardSubtitle>
                              <h5>
                                Junior Developer - From MAR/2008 to JUL/2010
                              </h5>
                            </CardSubtitle>
                            <CardText>
                              Developer of websites and web systems (C#, HTML,
                              CSS, jQuery, SQL) Enfasis in front-end
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="2"></Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default ProfilePage;
