'use strict';

// const content = require('../content-render');

const failure = (error) => {
  $('#messages').text(error);
  console.log('Did not create token! Error: ');
  console.error(error);
};

const createTokenSuccess = (response_data) => {
  console.log('Successfully created token!');
};

module.exports = {
  failure,
  createTokenSuccess,
};
