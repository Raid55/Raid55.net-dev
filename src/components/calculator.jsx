import React, { Component } from 'react';
// import { Link } from 'react-router';

import { Button, Well, Form, FormGroup, FormControl, Col, Row, Grid } from 'react-bootstrap';
import { calculator } from '../css/jsCSS.js';



export default class extends Component {
  state = {
    calcOutput: "",
    oppSlot: "",
    numSlot: "",
    accu: 0
  }

  handleNumber = (num) => {
    const { numSlot, calcOutput } = this.state
    this.setState({
      numSlot: numSlot + num,
      calcOutput: calcOutput + num
    });
  }

  handleClear = () => {
    this.setState({
      calcOutput: "",
      oppSlot: "",
      numSlot: "",
      accu: 0
    });
  }

  handleOpp = (opp) => {
    let tempAccu = 0;
    const { oppSlot, numSlot, accu, calcOutput } = this.state
    if(oppSlot === "" && opp !== "="){
      console.log("we get here", oppSlot, numSlot, accu, calcOutput);
      this.setState({
        numSlot: "",
        accu: Number(numSlot),
        oppSlot: opp,
        calcOutput: calcOutput + " " + opp + " "
      });
    }else if(numSlot !== "" && oppSlot !== ""){
      switch(oppSlot) {
        case "+":
          tempAccu = accu + Number(numSlot);
          break;
        case "-":
          tempAccu = accu - Number(numSlot);
          break;
        case "*":
          tempAccu = accu * Number(numSlot);
          break;
        case "/":
          tempAccu = accu / Number(numSlot);
          break;
        default:
          this.setState({
            calcOutput: "error with that things of the syntax"
          });
          break;
      }
      if(opp === "="){
        this.setState({
          numSlot: tempAccu,
          accu: "",
          oppSlot: "",
          calcOutput: opp+" "+ tempAccu+" "
        });
      }else{
        this.setState({
          numSlot: "",
          accu: tempAccu,
          oppSlot: opp,
          calcOutput: tempAccu+" "+opp+" "
        });
      }
    }else{
      console.log("error ERROR SYNTAXICALS ERRORS")
      this.setState({
        calcOutput: "ERROR ERROR ERROR BITCH"
      });
    }
  }

  render() {
    //@TODO: do some refrectoring, make map staments so that i dont repeat code, it also looks ugly and unprofetional
    return(
      <div>
        <Well bsSize="small">
          <Grid>
            <Row>
              <Col lg={1}>

              </Col>
              <Col  lg={10}>
                <Form>
                  <FormGroup bsSize="large">
                    <FormControl
                      type="text"
                      value={this.state.calcOutput}
                     />
                  </FormGroup>
                </Form>
              </Col>
            </Row>

            <Row>
              <Col lg={1}>

              </Col>
              <Col lg={2}>
                { ["7", "4", "1"].map(el =>
                  <Button bsSize="large" style={calculator.buttons} onClick={() => this.handleNumber(el) }>{ el }</Button>
                ) }
                <Button bsSize="large" bsStyle="danger" style={calculator.buttons} onClick={ this.handleClear }>C/e</Button>
              </Col>
              <Col lg={2}>
                { ["8", "5", "2","0"].map(el =>
                  <Button bsSize="large" style={calculator.buttons} onClick={() => this.handleNumber(el) }>{ el }</Button>
                ) }
              </Col>
              <Col lg={2}>
                { ["9", "6", "3"].map(el =>
                  <Button bsSize="large" style={calculator.buttons} onClick={() => this.handleNumber(el) }>{ el }</Button>
                ) }
                <Button bsSize="large" bsStyle="warning" style={calculator.buttons} onClick={() => this.handleOpp("=")}>=</Button>
              </Col>
              <Col lg={1}>

              </Col>
              <Col lg={3}>
                { ["+", "-", "/", "*"].map(el =>
                  <Button bsSize="large" bsStyle="primary" style={calculator.buttons} onClick={() => this.handleOpp(el)}>{ el }</Button>
                ) }
              </Col>
            </Row>
          </Grid>
        </Well>
      </div>
    )
  }
}
// className="output"
// className="numberPad"
// className="operators"
