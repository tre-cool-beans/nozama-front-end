'use strict';

const content = require('../content-render');

const failure = (error) => {
  $('#messages').text('fail');
};

const success = (data) => {
  $('#messages').text('success');
};

const indexPastOrdersSuccess = (past_orders) => {
  content.renderPastOrders(past_orders.pastorders);
};

const createPastOrderSuccess = (response_data) => {
};

module.exports = {
  failure,
  success,
  indexPastOrdersSuccess,
  createPastOrderSuccess,
};
