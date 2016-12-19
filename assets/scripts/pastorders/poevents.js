'use strict';

// const getFormFields = require(`../../../lib/get-form-fields`);

const poapi = require('./poapi');
const poui = require('./poui');

const onIndexPastOrders = function (event) {
  event.preventDefault();
  poapi.indexPastOrders()
    .then(poui.indexPastOrdersSuccess)
    .catch(poui.failure);
};

// Following functions are to bind functions to element
// events that are generated dynamically by handlebars

const addPastOrderHandlers = () => {
  // Trigger this when indexPastOrders loads in the content-render function
  // $('.purchase').off('submit');
  // $('.purchase').on('submit', onCreateCartProduct );
  console.log('PAST ORDER HANDLERS HAVE BEEN TRIGGERED');
};

const addHandlers = () => {
  $('#past-orders-button').on('click', onIndexPastOrders);
};

module.exports = {
  addPastOrderHandlers,
  addHandlers,
};
