'use strict';

const store = require('../store');

const sapi = require('./sapi');
const sui = require('./sui');

const poevents = require('../pastorders/poevents');
const cevents = require('../cart/cevents');

const onChargeCard = function(data) {
  let req_data = {
    token: data.id,
    amount: store.user.total * 100 // Need to sent it in cents
  };
  console.log("onChargeCard data before sending: ");
  console.log(data);
  console.log(req_data);
  sapi.chargeCard(req_data);
};

const onCreateToken = function(event) {
  event.preventDefault();
  let $payment_form = $('#payment-form');
  // Disable the submit button to prevent repeated clicks:
  $payment_form.find('.submit-payment').prop('disabled', true);
  // Re-enable the button after 3 seconds in case user needs to re-submit.
  setTimeout(() => $payment_form.find('.submit-payment').prop('disabled', false), 2000);
  // We are sending the whole form as getFormFields will not
  // work on this because the Stripe form fields have no name
  // and should not ever have a name.
  sapi.createToken($payment_form)
    .then((response_data) => {
      sui.createTokenSuccess(response_data);
      return onChargeCard(response_data);
    })
    .then((response_data) => {
      sui.chargeCardSuccess(response_data);
      return poevents.onCreatePastOrder();
    })
    .then(cevents.onEmptyCart)
    .then(setTimeout(poevents.onIndexPastOrders, 2000))
    .catch(sui.failure);
};

const addStripeHandlers = function() {
  $('#payment-form').on('submit', onCreateToken);
};

module.exports = {
  addStripeHandlers,
};
