'use strict';
const store = require('../store');
const config = require('../config');
// const store = require('../store');

const indexPastOrders = () =>
  $.ajax({
      url: config.host + '/pastorders',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
  });

module.exports = {
  indexPastOrders,
};
