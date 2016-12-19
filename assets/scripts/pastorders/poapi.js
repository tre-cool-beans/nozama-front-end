'use strict';

const config = require('../config');
// const store = require('../store');

const indexPastOrders = () =>
  $.ajax({
      url: config.host + '/past-orders',
      method: 'GET'
  });

module.exports = {
  indexPastOrders,
};
