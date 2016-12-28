'use strict';

const store = require('../store');
const productEvents = require('../products/pevents');

const changePasswordSuccess = () => {
  $('#change-password-form > div.form-group').removeClass('has-error');
  $('#change-password-form > div > span.help-block').html('Password successfully changed');
  $('.form-control').val('');
  $('#change-password-form > div.form-group').addClass('has-success');
  setTimeout(function() {
    $('#cp-dropdown').dropdown('toggle');
    $('#change-password-form > div > span.help-block').html('');
    $('#change-password-form > div.form-group').removeClass('has-success');
  }, 1000);
};

const changePasswordFailure = () => {
  $('#change-password-form > div.form-group').addClass('has-error');
  $('#change-password-form > div > span.help-block').html('Please enter a valid password');
};

const signInSuccess = (data) => {
  store.user = data.user;
  $('#sign-up-form > div.form-group').removeClass('has-error');
  $('span.help-block').html('');
  $('#sign-in-form > div.form-group').removeClass('has-error');
  $('span.help-block').html('');
  $('#content').trigger('show-one-product-change');
  // $('.form-control').val('');
  $('.nav-list > li').toggleClass('hidden');
  $('.collapse').collapse('hide');
};

const signOutSuccess = () => {
  store.user = null;
  $('.form-control').val('');
  $('.nav-list > li').toggleClass('hidden');
  productEvents.onIndexProducts();
};

const signUpFailure = () => {
  $('#sign-up-form > div.form-group').addClass('has-error');
  $('#sign-up-form > div > span.help-block').html('E-mail and/or password invalid');
};

const signUpSuccess = () => {
  $('#sign-up-form > div.form-group').removeClass('has-error');
  $('#sign-up-form > div > span.help-block').html('');
};

const signInFailure = () => {
  $('#sign-in-form > div.form-group').addClass('has-error');
  $('#sign-in-form > div > span.help-block').html('Invalid email or password');
};

module.exports = {
  signInFailure,
  signUpFailure,
  signUpSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signInSuccess,
  signOutSuccess,
};
