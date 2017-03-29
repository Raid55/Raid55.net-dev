import React, { Component } from 'react';
// import { Link } from 'react-router';

import { Button, Well, Form, FormGroup, FormControl } from 'react-bootstrap';



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
      this.setState({
        numSlot: "",
        accu: tempAccu,
        oppSlot: opp,
        calcOutput: tempAccu+" "+opp+" "
      });
    }else{
      console.log("error ERROR SYNTAXICALS ERRORS")
      this.setState({
        calcOutput: "ERROR ERROR ERROR BITCH"
      });
    }
  }

  render() {
    return(
      <div>
        <Well bsSize="small">
          <Grid>
            <Row>
              <Col  lg={12}>
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

            <Row className="show-grid">
              <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
              <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
              <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
            </Row>

            <Row className="show-grid">
              <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
            </Row>

            <Row className="show-grid">
              <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
              <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
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

  <div>
    <input type="text" value={this.state.calcOutput} id="calcOutput"/>
  </div>

    <FloatingActionButton mini={true} onClick={() => this.handleNumber("9") }>
      9
    </FloatingActionButton>

<RaisedButton label="+" onClick={() => this.handleOpp("+")}/>
<RaisedButton label="-" onClick={() => this.handleOpp("-") }/>
<RaisedButton label="/" onClick={() => this.handleOpp("/") }/>
<RaisedButton label="*" onClick={() => this.handleOpp("*") }/>
<RaisedButton label="=" onClick={() => this.handleOpp("=") }/>
<RaisedButton label="C/e" onClick={ this.handleClear }/>
