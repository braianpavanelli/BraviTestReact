import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 99 ||
        document.body.scrollTop > 99
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 100 ||
        document.body.scrollTop < 100
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="/index" id="navbar-brand">
              Bravi Test - Braian Pavanelli
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Home
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="/validator-page"
                >
                  <i className="now-ui-icons ui-1_check"></i>
                  <p>Validator</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons users_single-02 mr-1"></i>
                  <p>People</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/people-page">
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    All People
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link
                  to="/profile-page"
                  className="nav-link btn btn-neutral text-info"
                  id="my-resume"
                >
                  {" "}
                  <i className="now-ui-icons education_paper mr-1"></i>
                  <p>Take a Look my Resumé</p>
                </Link>
                {/* <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="./profile-page"
                  id="my-resume"
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons education_paper mr-1"></i>
                  <p>Take a Look my Resumé</p>
                </Button> */}
                <UncontrolledTooltip target="#my-resume">
                  Come on!
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.linkedin.com/in/braianpavanelli/"
                  target="_blank"
                  id="linkedin-tooltip"
                >
                  <i className="fab fa-linkedin"></i>
                  <p className="d-lg-none d-xl-none">LinkedIn</p>
                </NavLink>
                <UncontrolledTooltip target="#linkedin-tooltip">
                  See my Profile
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/braiantex"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Take care this could be a bit personal
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/braianpavanelli"
                  target="_blank"
                  id="github-tooltip"
                >
                  <i className="fab fa-github"></i>
                  <p className="d-lg-none d-xl-none">GitHub</p>
                </NavLink>
                <UncontrolledTooltip target="#github-tooltip">
                  My GitHub
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
