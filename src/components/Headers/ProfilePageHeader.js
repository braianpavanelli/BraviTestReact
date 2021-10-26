import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../img/bg10.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={require("../../img/perfil.jpg")}></img>
          </div>
          <h3 className="title">Braian Pavanelli</h3>
          <p className="category">Developer</p>
          <div className="content">
            <div className="social-description">
              <h2>7</h2>
              <p>Public Repositories</p>
            </div>
            <div className="social-description">
              <h2>13</h2>
              <p>Years of experience</p>
            </div>
            <div className="social-description">
              <h2>1</h2>
              <p>Project in React</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
