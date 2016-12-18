'use strict';

const config = require('../config');
const store = require('../store');

const indexProducts = () =>
  $.ajax({
      url: config.host + '/products',
      method: 'GET'
  });

const showCart = () =>
  $.ajax({
      url: config.host + '/users/' + store.user._id,
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
  });

const updateCart = (data) =>
  $.ajax({
      url: config.host + '/update-cart/' + store.user._id,
      method: 'PATCH',
      data,
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
  });

module.exports = {
  indexProducts,
  showCart,
  updateCart,
};