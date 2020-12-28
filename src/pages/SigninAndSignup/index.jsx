// Dependencies
import React from 'react';

// Components
import { SignInConnected } from '../../components/SignIn';
import { SignUp } from '../../components/SignUp';

// Styles
import './styles.scss';

export const SigninAndSignup = () => (
  <div className="sign-in-and-sign-up">
    <SignInConnected />
    <SignUp />
  </div>
);
