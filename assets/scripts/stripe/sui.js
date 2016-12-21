'use strict';

// const content = require('../content-render');

const failure = (error) => {
  $('#checkout-message').text(error.message);
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
