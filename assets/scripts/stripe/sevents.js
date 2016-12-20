'use strict';

// const getFormFields = require(`../../../lib/get-form-fields`);

const sapi = require('./sapi');
const sui = require('./sui');

const onCreateToken = function(event) {
  event.preventDefault();
  let $payment_form = $('#payment-form');
  // Disable the submit button to prevent repeated clicks:
  $payment_form.find('.submit-payment').prop('disabled', true);
  // We are sending the whole form as getFormFields will not
  // work on this because the Stripe form fields have no name
  // and should not ever have a name.
  sapi.createToken($payment_form)
    .then(sui.createTokenSuccess)
    .catch(sui.failure);

  // Prevent the form from submitting and hitting the db?
  return false;
};

const addStripeHandlers = function() {
  $('#payment-form').on('submit', onCreateToken);
};

module.exports = {
  addStripeHandlers,
};
