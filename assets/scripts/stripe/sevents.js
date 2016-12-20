'use strict';

const store = require('../store');

const sapi = require('./sapi');
const sui = require('./sui');

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
  // We are sending the whole form as getFormFields will not
  // work on this because the Stripe form fields have no name
  // and should not ever have a name.
  sapi.createToken($payment_form)
    .then((response_data) => {
      sui.createTokenSuccess(response_data);
      return onChargeCard(response_data);
    })
    .catch(sui.failure);
};

const addStripeHandlers = function() {
  $('#payment-form').on('submit', onCreateToken);
};

module.exports = {
  addStripeHandlers,
};
