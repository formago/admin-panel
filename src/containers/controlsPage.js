import React, { Component } from 'react';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import LayoutContent from '../components/utility/layoutContent';
import StyledInput from "../components/uielements/input";
import Button from "../components/uielements/button";
import { connect } from "react-redux";
import FormValidation from "./FormValidation";

import Box from '../components/utility/box';


import appAction from "../redux/app/actions";

const { sendName } = appAction;

class ControlsPage extends Component {

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
          <h1>Controls Page</h1>
          <h3>Register New User</h3>
       <Box>
        <FormValidation />
        </Box>
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
)(ControlsPage);
