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

const signInSuccess = (data) => {
  store.user = data.user;
  $('.nav > li').toggleClass('hidden');
  $('.collapse').collapse('hide');
  success(data);
};

const signOutSuccess = () => {
  store.user = null;
  console.log('SIGN OUT SUCCESS!');
  $('.nav > li').toggleClass('hidden');
  success(store.user);
};

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

module.exports = {
  failure,
  success,
  showCartSuccess,
  signInSuccess,
  signOutSuccess,
};
