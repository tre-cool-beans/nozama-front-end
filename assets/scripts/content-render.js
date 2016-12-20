'use strict';

const store = require('./store');

const indexProducts = require('../templates/index-products.handlebars');
const showCart = require('../templates/user-cart.handlebars');
const indexPastOrders = require('../templates/index-past-orders.handlebars');
const showProduct = require('../templates/show-product.handlebars');
const showCheckout = require('../templates/show-checkout.handlebars');

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

  // All this code should PROBABLY BE REFACTORED
  // and PUT SOMEWHERE ELSE; maybe store? It's just
  // ugly here.

  store.user.sub_total = 0;
  store.user.shipping = store.user.cart.length === 0 ? 0 : 10;
  store.user.tax_rate = 0.06;

  // Copy this code out to create total_price key
  for (let i = 0; i < store.user.cart.length; i++) {
    store.user.sub_total += store.user.cart[i].price;
  }
  // Copy ^ that code out to create total_price key

  store.user.tax = Math.round((store.user.sub_total * store.user.tax_rate) * 100) / 100;
  store.user.total = store.user.sub_total + store.user.tax + store.user.shipping;

  $('#sub-total').text('$' + store.user.sub_total.toFixed(2));
  $('#shipping').text('$' + store.user.shipping.toFixed(2));
  $('#tax').text('$' + store.user.tax.toFixed(2) + ' (' + store.user.tax_rate + '%)');
  $('#total').text('$' + store.user.total.toFixed(2));
};

const renderPastOrders = (past_orders) => {
  $('#content').html(indexPastOrders(past_orders));
  $('#content').trigger('show-past-order-change');
};

const renderCheckout = () => {
  $('#content').html(showCheckout());

  $('#sub-total').text('$' + store.user.sub_total);
  $('#shipping').text('$' + store.user.shipping);
  $('#tax').text('$' + store.user.tax + ' (' + store.user.tax_rate + '%)');
  $('#total').text('$' + store.user.total);

  $('#content').trigger('show-checkout-change');
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
  renderCheckout,
};
