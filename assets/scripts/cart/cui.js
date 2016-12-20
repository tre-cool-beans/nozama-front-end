'use strict';

const store = require('../store');
const content = require('../content-render');

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

const success = (data) => {
  $('#messages').text('success');
  console.log(data);
};

// All cart success functions can almost definitely be merged into one; not doing that yet just in case. -JOAUFI

const indexCartProductsSuccess = (user_data) => {
  $('#messages').text('cart success');
  console.log(user_data);
  content.renderCart(user_data);
  console.log(user_data);
};

// If updateCart PATCH is successful it responds with
// the updated user's cart (response_data.cart)
const createCartProductSuccess = (response_data) => {
  $('#messages').text('ADDED TO CART SUCCESSFULLY!');
  // Update user cart data stored locally by setting
  // the response cart to the store user cart
  store.user.cart = response_data.cart;
};

const updateCartProductSuccess = (response_data) => {
  store.user.cart = response_data.cart;
  $('#messages').text('ADDED TO CART SUCCESSFULLY!');
  content.renderCart(response_data);
};

module.exports = {
  failure,
  success,
  indexCartProductsSuccess,
  createCartProductSuccess,
  updateCartProductSuccess,
};
