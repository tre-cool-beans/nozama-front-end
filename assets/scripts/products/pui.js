'use strict';

const store = require('../store');

const success = (data) => {
  $('#messages').text('success');
  console.log(data);
};

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

const indexProductsSuccess = (response_data) => {
  console.log(response_data);
  $('#content').text(JSON.stringify(response_data));
};

const indexProductsFailure = (response_data) => {
  $('#content').text('MAN GETTING THOSE PRODUCTS FAILED SO HARD OH MAN OH MAN OH MAN OH MAN OH MAAAAAAAAAAAAAAN');
};

module.exports = {
  success,
  failure,
  indexProductsSuccess,
  indexProductsFailure,
};
