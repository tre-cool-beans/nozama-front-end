'use strict';

const authEvents = require('./auth/events.js');
const cartEvents = require('./cart/cevents.js');
const productEvents = require('./products/pevents.js');

// On document ready
$(() => {
  // All these handlers exist on page load
  authEvents.addHandlers();
  cartEvents.addHandlers();
  productEvents.addHandlers();

  // Loads the home/all products page
  productEvents.onIndexProducts();

  // Following functions are triggered when the corresponding
  // handlebars template is loaded to add handlers
  $('#content').on('show-cart-change', function() {
    cartEvents.addCartHandlers();
  });

  $('#content').on('show-product-change', function() {
    cartEvents.addCartProductHandlers();
  });

});
