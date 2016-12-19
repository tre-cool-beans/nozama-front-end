'use strict';

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

const createPastOrderSuccess = (response_data) => {
  console.log('This is the response from createPastOrder:');
  console.log(response_data);
};

module.exports = {
  failure,
  success,
  indexPastOrdersSuccess,
  createPastOrderSuccess,
};
