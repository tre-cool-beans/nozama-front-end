'use strict';

// const content = require('../content-render');

const failure = (error) => {
  if (error.responseText) {
    $('#checkout-message').text('Your card was declined, please check your input');
  } else {
    $('#checkout-message').text(error.message);
  }

  setTimeout(() => $('#checkout-message').text(''), 4000);
};

const createTokenSuccess = (response_data) => {
};

const chargeCardSuccess = (response_data) => {
};

module.exports = {
  failure,
  createTokenSuccess,
  chargeCardSuccess,
};
