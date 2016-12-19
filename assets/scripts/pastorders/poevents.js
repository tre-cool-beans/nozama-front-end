'use strict';

// const getFormFields = require(`../../../lib/get-form-fields`);

const store = require('./store');

const poapi = require('./poapi');
const poui = require('./poui');

const onIndexPastOrders = function (event) {
  event.preventDefault();
  poapi.indexPastOrders()
    .then(poui.indexPastOrdersSuccess)
    .catch(poui.failure);
};

const onCreatePastOrder = function(event) {
  event.preventDefault();
  let data = {};
  data.total_price = 0;
  data.cart = store.user.cart;
  data.comment = "This is just a TEST of onCreatePastOrder!";

  // Copy this code out to create total_price key
  for (let i = 0; i < store.user.cart.length; i++) {
    data.total_price += store.user.cart[i].price;
  }
  // Copy ^ that code out to create total_price key

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
  addHandlers,
};
