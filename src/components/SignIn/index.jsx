/* eslint-disable jsx-a11y/label-has-associated-control */
// Dependencies
import React from 'react';

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
          <input
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="password">Email</label>

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}
