'use strict';

const store = require('../store');
const productEvents = require('../products/pevents');

const success = (data) => {
  $('#messages').text('success');
  console.log("inside sign up success");
//   $('#rt1').click(function() {
//     $('#t1').attr('value', '');
//     $('#ht1').attr('value', '');
// });
};

const changePasswordSuccess = (data) => {
  $('#messages').text('success');
  $('.modal-input').val('');
  // $('.hidden').hide();
  // $('.hidden').show();
  console.log(data);
};

const signInSuccess = (data) => {
  store.user = data.user;
  $('.modal-input').val('');
  console.log($('.modal-input'));
  $('.nav-list > li').toggleClass('hidden');
  $('.collapse').collapse('hide');
  success(data);

};

const signOutSuccess = () => {
  store.user = null;
  $('.modal-input').val('');
  console.log('SIGN OUT SUCCESS!');
  $('.nav-list > li').toggleClass('hidden');
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
  changePasswordSuccess,
  signInSuccess,
  signOutSuccess,
};
