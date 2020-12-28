/* eslint-disable jsx-a11y/label-has-associated-control */
// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import { FormInput } from '../FormInput';
import { CustomButton } from '../CustomButton';

// Redux Actions
import {
  googleSignInStart as googleSignInStartAction,
  emailSignInStart as emailSignInStartAction
} from '../../store/actions/userActions';

// Styles
import './styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;

    const { email, password } = this.state;
    emailSignInStart(email, password);
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { googleSignInStart } = this.props;
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
          <div className="buttons">
            <CustomButton type="submit" value="Submit Form">
              Sign In
            </CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

SignIn.propTypes = {
  googleSignInStart: PropTypes.func,
  emailSignInStart: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStartAction()),
  emailSignInStart: (email, password) => dispatch(emailSignInStartAction({ email, password }))
});

export const SignInConnected = connect(null, mapDispatchToProps)(SignIn);
