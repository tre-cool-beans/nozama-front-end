'use strict';

const authEvents = require('./auth/events.js');
// const cartEvents = require('./cart/cevents.js');
const productEvents = require('./products/pevents.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  productEvents.onIndexProducts();
});
