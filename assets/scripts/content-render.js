'use strict';

const store = require('./store');

const indexProducts = require('../templates/index-products.handlebars');

const cartEvents = require('./cart/cevents.js');

const renderProducts = (products) => {
  $('#content').html(indexProducts(products));
  cartEvents.addHandlers();
};

// const renderWelcomePage = () => {
//   $('.hide-till-sign-in').hide();
//   $('#content').html(showWelcomePageTemplate());
//   $('#content').trigger('content-changed');
// };

module.exports = {
  renderProducts,
};
