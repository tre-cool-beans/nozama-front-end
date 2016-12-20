'use strict';

// const store = require('./store');

const indexProducts = require('../templates/index-products.handlebars');
const showCart = require('../templates/user-cart.handlebars');
const indexPastOrders = require('../templates/index-past-orders.handlebars');
const showProduct = require('../templates/show-product.handlebars');

const renderProducts = (products) => {
  $('#content').html(indexProducts(products));
  $('#content').trigger('show-product-change');
};

const renderProduct = (product) => {
  $('#content').html(showProduct(product));
  $('#content').trigger('show-one-product-change');
};

const renderCart = (cart_data) => {
  $('#content').html(showCart(cart_data));
  $('#content').trigger('show-cart-change');
};

const renderPastOrders = (past_orders) => {
  $('#content').html(indexPastOrders(past_orders));
  $('#content').trigger('show-past-order-change');
};

// const renderWelcomePage = () => {
//   $('.hide-till-sign-in').hide();
//   $('#content').html(showWelcomePageTemplate());
//   $('#content').trigger('content-changed');
// };

module.exports = {
  renderProducts,
  renderProduct,
  renderCart,
  renderPastOrders,
};
