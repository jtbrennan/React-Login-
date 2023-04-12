import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StytchProvider } from '@stytch/react';
import { StytchUIClient } from '@stytch/vanilla-js';


const STYTCH_PUBLIC_TOKEN = 'public-token-test-cc1b18f5-ae18-4b84-be92-0b8980347d79'
const stytch = new StytchUIClient(STYTCH_PUBLIC_TOKEN);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StytchProvider stytch={stytch}>
    {window.self !== window.top &&
      <h3>WARNING<a href={window.location.href} target='_blank'></a></h3>
    }
    < App />
  </StytchProvider>
)