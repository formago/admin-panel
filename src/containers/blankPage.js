import React, { Component } from 'react';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import LayoutContent from '../components/utility/layoutContent';
import StyledInput from "../components/uielements/input";
import Button from "../components/uielements/button";
import { connect } from "react-redux";

import appAction from "../redux/app/actions";

const { sendName } = appAction;

class BlankPage extends Component {

  constructor() {
    super();
    this.sumbitName = this.sumbitName.bind(this);
    this.state = {
      firstName: '',
      lastName: ''
    }
  }

  sumbitName() {
     this.props.sendName({ "firstName": "max", "lastName": "Formago" });
  }
  render() {
    const {
      firstName,
      lastName
    } = this.state;
    console.log(this.props);
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <h1>Blank Page</h1>
          <h2>Blank Page</h2>

          <div className="isoSignUpForm">
            <div className="isoInputWrapper isoLeftRightComponent">
              <StyledInput size="large" placeholder="First name" onChange={(event) => this.setState({ firstName: event.target.value })} />
            </div>
            <div className="isoInputWrapper">
              <StyledInput size="large" placeholder="Last name" onChange={(event) => this.setState({ lastName: event.target.value })} />
            </div>

            <Button
              onClick={this.sumbitName}
              type="primary btnAuthZero"
            >
              send
                  </Button>
          </div>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}


export default connect(
  state => ({
    formago: state.App.formago
  }),
  { sendName }
)(BlankPage);
