'use strict';

const store = require('../store');
const productEvents = require('../products/pevents');

const success = () => {
  $('#messages').text('success');
};

const changePasswordSuccess = () => {
  $('#messages').text('success');
  $('.modal-input').val('');
  $('#cp-dropdown').dropdown('toggle');
};

const signInSuccess = (data) => {
  store.user = data.user;
  $('#content').trigger('show-one-product-change');
  $('.modal-input').val('');
  $('.nav-list > li').toggleClass('hidden');
  $('.collapse').collapse('hide');
  success(data);
};

const signOutSuccess = () => {
  store.user = null;
  $('.modal-input').val('');
  $('.nav-list > li').toggleClass('hidden');
  success(store.user);
  productEvents.onIndexProducts();
};

const failure = (error) => {
  $('#messages').text('fail');
};

module.exports = {
  failure,
  success,
  changePasswordSuccess,
  signInSuccess,
  signOutSuccess,
};
