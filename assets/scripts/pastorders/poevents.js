'use strict';

// const getFormFields = require(`../../../lib/get-form-fields`);

const store = require('../store');

const poapi = require('./poapi');
const poui = require('./poui');

const onIndexPastOrders = function (event) {
  if (event) {
    event.preventDefault();
  }
  poapi.indexPastOrders()
    .then(poui.indexPastOrdersSuccess)
    .catch(poui.failure);
};

const onCreatePastOrder = function() {
  let data = {
    pastorder: {
      cart: store.user.cart,
      shipping: store.user.shipping,
      tax: store.user.tax,
      total_price: store.user.total,
    }
  };

  console.log("THIS IS PAST ORDER SENDING DATA: ");
  console.log(data);
  poapi.createPastOrder(data)
    .then(poui.createPastOrderSuccess)
    .catch(poui.failure);
};

// Following functions are to bind functions to element
// events that are generated dynamically by handlebars

const addPastOrderHandlers = () => {
  // Trigger this when indexPastOrders loads in the content-render function
  // $('.purchase').off();
  // $('.purchase').on('submit', onCreateCartProduct );
  $('#checkout-button').off();
  $('#checkout-button').on('click', onCreatePastOrder);
  console.log('PAST ORDER HANDLERS HAVE BEEN TRIGGERED');
};

const addHandlers = () => {
  $('#past-orders-button').on('click', onIndexPastOrders);
};

module.exports = {
  addPastOrderHandlers,
  onCreatePastOrder,
  onIndexPastOrders,
  addHandlers,
};
