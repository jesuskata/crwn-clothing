// Dependencies
import React from 'react';

// Components
import { SignInConnected } from '../../components/SignIn';
import { SignUpConnected } from '../../components/SignUp';

// Styles
import './styles.scss';

const SigninAndSignup = () => (
  <div className="sign-in-and-sign-up">
    <SignInConnected />
    <SignUpConnected />
  </div>
);

export default SigninAndSignup;
