// Dependencies
import React from 'react';

// Components
import { SignInConnected } from '../../components/SignIn';
import { SignUpConnected } from '../../components/SignUp';

// Styles
import './styles.scss';

export const SigninAndSignup = () => (
  <div className="sign-in-and-sign-up">
    <SignInConnected />
    <SignUpConnected />
  </div>
);
