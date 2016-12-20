'use strict';

// const content = require('../content-render');

const failure = (error) => {
  $('#messages').text(error.message);
  console.log('Did not create token! Error: ');
  console.error(error.message);
};

const createTokenSuccess = (response_data) => {
  console.log('Successfully created token!');
};

const chargeCardSuccess = (response_data) => {
  console.log('Successfully charged card!');
};

module.exports = {
  failure,
  createTokenSuccess,
  chargeCardSuccess,
};
