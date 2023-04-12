import React, { useState, useEffect } from 'react';
import { StytchPasswordReset } from '@stytch/react';
import { Products } from '@stytch/vanilla-js';

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
const Reset = ({ passwordResetToken }) => <>
  <StytchPasswordReset
    config={config}
    passwordResetToken={passwordResetToken}
  />
</>


export default Reset;