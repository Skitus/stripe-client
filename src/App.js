import React from 'react';
// Components
import HomePage from './components/HomePage.js';
// Stripe
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
// Styles
import './index.scss';

const stripePromise = loadStripe("pk_test_51KQpaVKtH21p71NufC2oknPHjMdrsZfW0SD6Brt5W7smxWcl1P779jarf34sC1notbjgj40s0eDnSj27yEZauMFU00yvUsBjiG");

function App() {
  return (
      <Elements stripe={stripePromise}>
        <HomePage />
      </Elements>
  );
}

export default App;