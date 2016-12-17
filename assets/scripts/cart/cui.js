'use strict';

const store = require('../store');
const content = require('../content-render');

const success = (data) => {
  $('#messages').text('success');
  console.log(data);
};

const showCartSuccess = (user_data) => {
  $('#messages').text('cart success');
  console.log('this is the show cart success');
  console.log(user_data);
  content.renderCart(user_data);
};

const getUserCartSuccess = (user_data) => {
  console.log('Data BEFORE ADDITION: ');
  console.log(store.user);

  store.user.cart = user_data.user.cart;

  console.log('Data AFTER ADDTION: ');
  console.log(store.user);
};

const updateCartSuccess = (user_data) => {
  console.log('patch from updateCartSuccess');
  console.log(store.user);
};

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

module.exports = {
  getUserCartSuccess,
  failure,
  success,
  showCartSuccess,
  updateCartSuccess,
};
