'use strict';

const store = require('./store');

const indexProducts = require('../templates/index-products.handlebars');

const renderProducts = (products) => {
  $('#content').html(indexProducts(products));
};

// const renderWelcomePage = () => {
//   $('.hide-till-sign-in').hide();
//   $('#content').html(showWelcomePageTemplate());
//   $('#content').trigger('content-changed');
// };

module.exports = {
  renderProducts,
};
