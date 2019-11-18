import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

import CheckBg  from "../../img/check.jpg";
import DefaultBg from "../../img/notebook.jpg";

function LandingPageHeader(props) {
  let pageHeader = React.createRef();
  let url = props.origin == "validator" ? CheckBg : DefaultBg;

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
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + url + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
          {/* This is my Brackets validator. */}
            <h1 className="title">{props.text}</h1>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
