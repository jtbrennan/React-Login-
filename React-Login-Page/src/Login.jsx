import React from 'react';
import { Products } from '@stytch/vanilla-js';
import { StytchLogin } from '@stytch/react';

const config = {
  passwordOptions: {
    loginExpirationMinutes: 30,
    loginRedirectURL: `https://${window.location.hostname}`,
    resetPasswordExpirationMinutes: 30,
    resetPasswordRedirectURL: `https://${window.location.hostname}`,
  },
  products: [
    Products.passwords,
  ],
};

const Login = () => {
  return <StytchLogin config={config} />;
}

export default Login;