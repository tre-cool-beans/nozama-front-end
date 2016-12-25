'use strict';

const store = require('../store');
const productEvents = require('../products/pevents');

const success = () => {
  $('#messages').text('success');
};

const changePasswordSuccess = () => {
  $('#messages').text('success');
  $('.form-control').val('');
  $('#cp-dropdown').dropdown('toggle');
};

const signInSuccess = (data) => {
  store.user = data.user;
  $('#sign-up-form > div.form-group').removeClass('has-error');
  $('span.help-block').html('');
  $('#content').trigger('show-one-product-change');
  $('.form-control').val('');
  $('.nav-list > li').toggleClass('hidden');
  $('.collapse').collapse('hide');
  success(data);
};

const signOutSuccess = () => {
  store.user = null;
  $('.form-control').val('');
  $('.nav-list > li').toggleClass('hidden');
  success(store.user);
  productEvents.onIndexProducts();
};

const signUpFailure = () => {
  $('#sign-up-form > div.form-group').addClass('has-error');
  $('span.help-block').html('email and/or password invalid');
};
const failure = (error) => {
  $('#messages').text('fail');
};

module.exports = {
  signUpFailure,
  failure,
  success,
  changePasswordSuccess,
  signInSuccess,
  signOutSuccess,
};
