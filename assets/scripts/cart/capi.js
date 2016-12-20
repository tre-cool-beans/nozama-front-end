'use strict';

const config = require('../config');
const store = require('../store');

const createCartProduct = (data) =>
  $.ajax({
    url: config.host + '/cart/' + store.user._id,
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });

const indexCartProducts = () =>
  $.ajax({
      url: config.host + '/users/' + store.user._id,
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
  });


const updateCartProduct = (data) =>
  $.ajax({
      url: config.host + '/cart/' + store.user._id,
      method: 'PATCH',
      data,
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
  });

const destroyCartProduct = (data) =>
  $.ajax({
      url: config.host + '/cart/' + store.user._id,
      method: 'DELETE',
      data,
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
  });

module.exports = {
  indexCartProducts,
  createCartProduct,
  updateCartProduct,
  destroyCartProduct,
};
