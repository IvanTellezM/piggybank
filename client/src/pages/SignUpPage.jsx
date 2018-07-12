import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../components/SignUpForm.jsx';
import API from '../utils/API';

class SignUpPage extends React.Component {
  // set the initial component state
  state = {
    errors: {},
    user: {
      email: '',
      name: '',
      password: ''
    }
  }

  /**
   * Process the form.
   * the JavaScript event object
   * @param {object} event 
   */
  processForm = event => {
    
    event.preventDefault();
    
    
    const { name, email, password } = this.state.user;

    
    API.signUp({name, email, password}).then(res => {
      
        localStorage.setItem('successMessage', res.data.message);

       
        this.props.history.push('/login');
        this.setState({
          errors: {}
        });

    }).catch(( {response} ) => {

        const errors = response.data.errors ? response.data.errors : {};
        errors.summary = response.data.message;

        this.setState({
          errors
        });
      });
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser = event => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  
   // Render the component.
   
  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

SignUpPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpPage;
