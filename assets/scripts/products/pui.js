'use strict';

const store = require('../store');

const content = require('../content-render');

const success = (data) => {
  $('#messages').text('success');
};

const failure = (error) => {
  $('#messages').text('fail');
};

const indexProductsSuccess = (response_data) => {
  content.renderProducts(response_data.products);
};

const showProductSuccess = (response_data) => {
  content.renderProduct(response_data.product);
};

const indexProductsFailure = (response_data) => {
  $('#content').text('MAN GETTING THOSE PRODUCTS FAILED SO HARD OH MAN OH MAN OH MAN OH MAN OH MAAAAAAAAAAAAAAN');
};

const showProductFailure = (response_data) => {
  $('#content').text('MAN GETTING THOSE PRODUCTS FAILED SO HARD OH MAN OH MAN OH MAN OH MAN OH MAAAAAAAAAAAAAAN');
};

module.exports = {
  success,
  failure,
  indexProductsSuccess,
  indexProductsFailure,
  showProductSuccess,
  showProductFailure,
};
