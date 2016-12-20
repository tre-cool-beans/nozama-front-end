'use strict';

const config = require('../config');
const store = require('../store');

const createToken = ($payment_form) =>
  new Promise((resolve, reject) => {
    Stripe.card.createToken($payment_form, function(status, response) {
      if (response.error) {
        reject(response.error);
      } else {
        resolve(response);
      }
    });
  });

const chargeCard = (data) =>
  $.ajax({
    url: config.host + '/stripe',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });

module.exports = {
  createToken,
  chargeCard,
};
