import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import "./login.css";


class login extends Component {
  constructor(props) {
    super(props);


    this.state = {
      email: "",
      password: ""
    };
  }

  


  render() {
    return (
      <div className="Login">
        <Card className="container">
        
          <CardContent>
          <h2 className="title">Welcome Back!</h2>
          <h2 className="title">Please Login.</h2>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Login
            </Button>
          </form>
          </CardContent>
          <p align='center' >Don't have an account? Click here to sign up</p>
        </Card>
      </div>
    );
  }
}
export default login;
