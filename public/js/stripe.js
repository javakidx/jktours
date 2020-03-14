import Axios from 'axios';
import { showAlrert } from './alters';
/* eslint-disable */
var stripe = Stripe('pk_test_ctqgbuMVTwMhJ0kdiPi2qkyN00xNSo1SZD');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await Axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkuot form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    showAlrert('error', err);
  }
};
