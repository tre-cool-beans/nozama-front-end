'use strict';

const authEvents = require('./auth/events.js');
const cartEvents = require('./cart/cevents.js');
const productEvents = require('./products/pevents.js');
const pastOrderEvents = require('./pastorders/poevents.js');

// On document ready
$(() => {
  // All these handlers exist on page load
  authEvents.addHandlers();
  cartEvents.addHandlers();
  productEvents.addHandlers();
  pastOrderEvents.addHandlers();

  // Loads the home/all products page
  productEvents.onIndexProducts();

  // Following functions are triggered when the corresponding
  // handlebars template is loaded to add handlers
  $('#content').on('show-cart-change', function() {
    cartEvents.addCartProductHandlers();
  });

  $('#content').on('show-product-change', function() {
    cartEvents.addProductPageHandlers();
  });

  $('#content').on('show-past-order-change', function(){
    pastOrderEvents.addPastOrderHandlers();
  });

});
