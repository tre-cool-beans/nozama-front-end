'use strict';

const store = require('../store');
const content = require('../content-render');

const success = (data) => {
  $('#messages').text('success');
  console.log(data);
};

const showCartSuccess = (user_data) => {
  $('#messages').text('cart success');
  content.renderCart(user_data);
  console.log(user_data);
};
const updateCartSuccess = (user_data) => {
console.log('patch from updateCartSuccess');
console.log(user_data);
};



const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

module.exports = {
  failure,
  success,
  showCartSuccess,
  updateCartSuccess,
};
