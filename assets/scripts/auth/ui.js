'use strict';

const store = require('../store');
const productEvents = require('../products/pevents');

const success = (data) => {
  $('#messages').text('success');
  console.log(data);
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
  productEvents.onIndexProducts();
};

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
};
