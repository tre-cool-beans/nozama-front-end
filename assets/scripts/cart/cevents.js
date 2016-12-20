'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const capi = require('./capi');
const cui = require('./cui');

const onCreateCartProduct = function (event) {
  event.preventDefault();
  let cart_product = getFormFields(this);
  capi.createCartProduct(cart_product)
    .then(cui.createCartProductSuccess)
    .catch(cui.failure);
};

const onIndexCartProducts = function (event) {
  event.preventDefault();
  capi.indexCartProducts()
    .then(cui.indexCartProductsSuccess)
    .catch(cui.failure);
};

const onUpdateCartProduct = function (event) {
  event.preventDefault();
  capi.updateCartProduct()
    .then(cui.updateCartProductSuccess)
    .catch(cui.failure);
};

// Following functions are to bind functions to element
// events that are generated dynamically by handlebars

const addProductPageHandlers = () => {
  $('.purchase').off();

  $('.purchase').on('submit', onCreateCartProduct);
};

const addCartProductHandlers = () => {
  // Trigger this when the My Cart template is loaded
  $('.update-cart-button').off();

  $('.update-cart-button').on('click', onUpdateCartProduct);

  console.log('CART HANDLERS HAVE BEEN TRIGGERED');
};

const addHandlers = () => {
  $('#cart-button').on('click', onIndexCartProducts);
};

module.exports = {
  addProductPageHandlers,
  addCartProductHandlers,
  addHandlers,
};
