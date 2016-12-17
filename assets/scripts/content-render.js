'use strict';

const store = require('./store');

const indexProducts = require('../templates/index-products.handlebars');
const showCart = require('../templates/user-cart.handlebars');

const renderProducts = (products) => {
  $('#content').html(indexProducts(products));
  $('#content').trigger('show-product-change');
};

const renderCart = (user_data) => {
  $('#content').html(showCart(user_data.user.cart));
  $('#content').trigger('show-cart-change');
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
