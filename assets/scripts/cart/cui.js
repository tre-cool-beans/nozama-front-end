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

const showCartSuccess = (user_data) => {
  $('#messages').text('cart success');
  content.renderCart(user_data);
  console.log(user_data);
};

// If updateCart PATCH is successful it responds with
// the updated user's cart (response_data.cart)
const updateCartSuccess = (response_data) => {
  $('#messages').text('ADDED TO CART SUCCESSFULLY!');
  // Update user cart data stored locally by setting
  // the response cart to the store user cart
  store.user.cart = response_data.cart;
};

module.exports = {
  failure,
  success,
  showCartSuccess,
  updateCartSuccess,
};
