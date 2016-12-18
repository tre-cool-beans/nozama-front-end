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

// Response will be entire user object, when successful
// on making the response to updateCart just return
// the new cart, need to change
const updateCartSuccess = (user_data) => {
  $('#messages').text('ADDED TO CART SUCCESSFULLY!');
  console.log('RESPONSE FROM UPDATE CART, USER OBJ: ');
  console.log(user_data);
};

module.exports = {
  failure,
  success,
  showCartSuccess,
  updateCartSuccess,
};
