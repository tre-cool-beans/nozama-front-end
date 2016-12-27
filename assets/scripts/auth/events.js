'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  console.log(data);
  if (data.credentials.password !== data.credentials.password_confirmation) {
    ui.signUpFailure();
  } else {
    api.signUp(data)
      .then((response_data) => {
        ui.signUpSuccess(response_data);
        return api.signIn(data);
      })
      .then(ui.signInSuccess)
      .catch(ui.signUpFailure);
  }
};

const onSignIn = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure);
};

const onChangePassword = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure);
};

const onSignOut = (event) => {
    event.preventDefault();
    api.signOut()
      .then(ui.signOutSuccess)
      .catch(ui.failure);
};

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp);
  $('#sign-in-form').on('submit', onSignIn);
  $('#change-password-form').on('submit', onChangePassword);
  $('#sign-out-button').on('click', onSignOut);
};

module.exports = {
  addHandlers,
};
