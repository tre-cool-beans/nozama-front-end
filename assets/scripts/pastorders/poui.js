'use strict';

// const store = require('../store');
const content = require('../content-render');

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};

const success = (data) => {
  $('#messages').text('success');
  console.log(data);
};

const indexPastOrdersSuccess = (past_orders) => {
  $('#messages').text('cart success');
  content.renderPastOrders(past_orders);
  console.log(past_orders);
};

module.exports = {
  failure,
  success,
  indexPastOrdersSuccess,
};
