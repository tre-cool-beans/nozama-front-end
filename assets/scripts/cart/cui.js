'use strict';

const store = require('../store');
const content = require('../content-render');

const failure = (error) => {
  $('#messages').text('fail');
};

const success = (data) => {
  $('#messages').text('success');
};

// All cart success functions can almost definitely be merged into one; not doing that yet just in case. -JOAUFI

const indexCartProductsSuccess = (user_data) => {
  store.user.cart = user_data.user.cart;
  content.renderCart(user_data.user.cart);
};

// If updateCart PATCH is successful it responds with
// the updated user's cart (response_data.cart)
const createCartProductSuccess = (response_data) => {
  store.user.cart = response_data.cart;
  $('#product-message').text('Added to Cart');
  setTimeout(() => $('#product-message').text(''), 2000);

  // Update user cart data stored locally by setting
  // the response cart to the store user cart
};

const updateCartProductSuccess = (response_data) => {
  store.user.cart = response_data.cart;
  content.renderCart(response_data.cart);
  $('#cart-message').text('Updated Cart');
  setTimeout(() => $('#cart-message').text(''), 2000);
};

const destroyCartProductSuccess = (response_data) => {
  store.user.cart = response_data.cart;
  content.renderCart(response_data.cart);
  $('#cart-message').text('Removed Cart Product');
  setTimeout(() => $('#cart-message').text(''), 2000);
};

const emptyCartSuccess = (response_data) => {
  store.user.cart = response_data.cart;
  $('#checkout-message').text('Payment was successful');
  setTimeout(() => $('#checkout-message').text(''), 2000);
};

const checkoutSuccess = () => {
  content.renderCheckout();
};

module.exports = {
  failure,
  success,
  indexCartProductsSuccess,
  createCartProductSuccess,
  updateCartProductSuccess,
  destroyCartProductSuccess,
  emptyCartSuccess,
  checkoutSuccess,
};
