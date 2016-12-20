'use strict';

// const getFormFields = require(`../../../lib/get-form-fields`);

const sapi = require('./sapi');
const sui = require('./sui');

const addStripeHandlers = function() {
  let $form = $('#payment-form');

  $form.on('submit', function(event) {
    // Disable the submit button to prevent repeated clicks:
    $form.find('.submit').prop('disabled', true);

    // Request a token from Stripe:
    Stripe.card.createToken($form, function(status, response) {
      console.log('STRIPE STATUS: ');
      console.log(status);
      console.log('STRIPE RESPONSE: ');
      console.log(response);
    });

    // Prevent the form from being submitted:
    return false;
  });
};

module.exports = {
  addStripeHandlers,
};
