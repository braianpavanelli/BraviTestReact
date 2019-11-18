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
import Validator from "../components/Validator.js";

function LandingPage() {


  // function handleChange(e) {
  //   setInputs(prevState => {
  //     return { ...prevState, [target.name]: target.value };
  //   });
  //   const target = e.target;
  //   console.log(this);
  //   console.log(e);
  //   console.log(target);
  //   this.setState({validator : target.value, error : target.validationMessage});
  //   //console.log({this.validator});
  //   //this.inputs.validator.setState(isValidString(target.value));
  //   if (isValidString(target.value)) {
  //     //target.add
  //     console.log("valido porra");
  //   }
  // }

  // function getInitialInputsState() {
  //   return {
  //     validator: ""
  //   };
  // }

  // function isValidString(str) {
  //   console.log(str);
  //   var strArr = str.split("");
  //   var matches = { "}": "{", "]": "[", ")": "(" };
  //   var stack = new Array();

  //   for (var i = 0; i < strArr.length; i++) {
  //     var char = strArr[i];

  //     if (Object.values(matches).includes(char)) {
  //       stack.push(char);
  //     } else if (Object.keys(matches).includes(char)) {
  //       if (stack[stack.length - 1] !== matches[char]) {
  //         return false;
  //       } else {
  //         stack.pop(char);
  //       }
  //     }
  //   }
  //   return !stack.length;
  // }

  // const [inputs, setInputs] = React.useState(getInitialInputsState());
  // const [firstFocus, setFirstFocus] = React.useState(false);

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
        <LandingPageHeader origin="validator" text="This is my Brackets validator." />
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Type a sequence of Brackets!</h2>
            <p className="description">
              {"A Bracket is a character like ( ), [ ], or { } "}
            </p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                {/* <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_lock-circle-open"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    id="validator"
                    name="validator"
                    value={inputs.validator}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Type Here..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup> */}
                <Validator />
              </Col>
            </Row>
            <Row>
              <Col></Col>
            </Row>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default LandingPage;
