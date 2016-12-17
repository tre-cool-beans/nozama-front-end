'use strict';

const authEvents = require('./auth/events.js');
const cartEvents = require('./cart/cevents.js');
const productEvents = require('./products/pevents.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  cartEvents.addHandlers();

  $('#content').on('show-cart-change', function() {
    cartEvents.addCartHandlers();
  });

  $('#content').on('show-product-change', function() {
    cartEvents.addProductHandlers();
  });

  productEvents.onIndexProducts();
});
