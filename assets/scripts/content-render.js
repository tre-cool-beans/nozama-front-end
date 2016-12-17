'use strict';

const store = require('./store');

const indexProducts = require('../templates/index-products.handlebars');
const showCart = require('../templates/user-cart.handlebars');

const cartEvents = require('./cart/cevents.js');

const renderProducts = (products) => {
  $('#content').html(indexProducts(products));
  cartEvents.addHandlers();
};

const renderCart = (user_data) => {
  $('#content').html(showCart(user_data));
  cartEvents.addHandlers();
};

// const renderWelcomePage = () => {
//   $('.hide-till-sign-in').hide();
//   $('#content').html(showWelcomePageTemplate());
//   $('#content').trigger('content-changed');
// };

module.exports = {
  renderProducts,
  renderCart,
};
