'use strict';

const store = require('../store');

const success = (data) => {
  $('#messages').text('success');
  console.log(data);
};

const signInSuccess = (data) => {
  store.user = data.user;
  success(data);
};

const signOutSuccess = () => {
    success(store.user);
    store.user = null;
};

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
};
