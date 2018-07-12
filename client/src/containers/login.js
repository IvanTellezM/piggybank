import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link} from "react-router-dom";
import "./login.css";
import App from "../App.js";


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  renderRedirect = () => {
     {
      return <Link> <App/> </Link>
    }
  }

  render() {
    return (
      <div className="Login">
        <Card className="card">
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
              onClick={this.renderRedirect()}
                 >
              Login
            </Button>
          </form>

          </CardContent>
          <p align='center' >Don't have an account? Click to sign up</p>
          <Button
              block
              bsSize="xsmall"
              type="submit"
            >
            Sign-up!
          </Button>
        </Card>
      </div>
    );
  }
}

export default Login;