/* eslint-disable jsx-a11y/label-has-associated-control */
// Dependencies
import React from 'react';

// Components
import { FormInput } from '../FormInput';

// Styles
import './styles.scss';

export class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with you email and password</span>

        <form onSubmit={this.handleSubmit} action="">
          <FormInput
            name="email"
            type="email"
            value={email}
            label="email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            label="password"
            handleChange={this.handleChange}
            required
          />

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}
