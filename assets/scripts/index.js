'use strict';

const authEvents = require('./auth/events.js');
const cartEvents = require('./cart/cevents.js');
const productEvents = require('./products/pevents.js');
const stripeEvents = require('./stripe/sevents.js');
const pastOrderEvents = require('./pastorders/poevents.js');
// const helpers = require('handlebars-helpers')();
// const math = helpers.math();
//
// math.multiply = function(a, b) {
//   return a * b;
// };

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

  $('#content').on('show-one-product-change', function() {
    cartEvents.addProductPageHandlers();
  });

  $('#content').on('show-past-order-change', function() {
    pastOrderEvents.addPastOrderHandlers();
  });

  $('#content').on('show-checkout-change', function() {
    stripeEvents.addStripeHandlers();
  });

});
