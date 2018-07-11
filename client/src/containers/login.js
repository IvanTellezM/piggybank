import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user,
  toggleAuthenticateStatus
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Log in" primary />
      </div>

      <CardText>Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>
    </form>
  </Card>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};



// import React, { Component } from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';

// import "./login.css";


// class Login extends Component {
//   constructor(props) {
//     super(props);


//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

//   validateForm() {
//     return this.state.email.length > 0 && this.state.password.length > 0;
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.id]: event.target.value
//     });
//   }

//   handleSubmit = event => {
//     event.preventDefault();
//   }


//   render() {
//     return (
//       <div className="Login">
//         <Card className="card">
//           <CardContent>
//           <h2 className="title">Welcome Back!</h2>
//           <h2 className="title">Please Login.</h2>
//           <form onSubmit={this.handleSubmit}>
//             <FormGroup controlId="email" bsSize="large">
//               <ControlLabel>Email</ControlLabel>
//               <FormControl
//                 autoFocus
//                 type="email"
//                 value={this.state.email}
//                 onChange={this.handleChange}
//               />
//             </FormGroup>
//             <FormGroup controlId="password" bsSize="large">
//               <ControlLabel>Password</ControlLabel>
//               <FormControl
//                 value={this.state.password}
//                 onChange={this.handleChange}
//                 type="password"
//               />
//             </FormGroup>
//             <Button
//               block
//               bsSize="large"
//               disabled={!this.validateForm()}
//               type="submit"
//             >
//               Login
//             </Button>
//           </form>
//           </CardContent>
//           <p align='center' >Don't have an account? Click here to sign up</p>
//         </Card>
//       </div>
//     );
//   }
// }

export default LoginForm;