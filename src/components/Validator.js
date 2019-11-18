import React from "react";

// reactstrap components
import {
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup
  } from "reactstrap";

class ValidatorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', error: '', valid: '', invalid:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.isValidString = this.isValidString.bind(this);
    }
  
    handleChange(event) {
      console.log('passei pelo handle');
      let val = event.target.value;
      let retValid = this.isValidString(val);
            if(retValid){
          this.setState({invalid: false, valid: true});
      }else {this.setState({invalid: true, valid: false});}
    }

    isValidString(str) {
    console.log(str);
    var strArr = str.split("");
    var matches = { "}": "{", "]": "[", ")": "(" };
    var stack = new Array();

    for (var i = 0; i < strArr.length; i++) {
      var char = strArr[i];

      if (Object.values(matches).includes(char)) {
        stack.push(char);
      } else if (Object.keys(matches).includes(char)) {
        if (stack[stack.length - 1] !== matches[char]) {
          return false;
        } else {
          stack.pop(char);
        }
      }
    }
    return !stack.length;
  }

 
    render() {
      return (
        <form>
          <label>
          <InputGroup
                  className={
                    "input-lg input-group-focus" 
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
                    value={this.input}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Type Here..."
                    type="text"
                    valid={this.state.valid}
                    invalid={this.state.invalid}
                  ></Input>
                </InputGroup>
          </label>
        </form>
      );
    }
  }

  export default ValidatorForm;