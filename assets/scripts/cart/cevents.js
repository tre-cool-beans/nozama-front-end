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

const onShowCart = function (event) {
  event.preventDefault();
  capi.showCart()
    .then(cui.showCartSuccess)
    .catch(cui.failure);
};

// Following functions are to bind functions to element
// events that are generated dynamically by handlebars

const addCartProductHandlers = () => {
  $('.purchase').off();
  $('.purchase').on('submit', onCreateCartProduct );
};

const addCartHandlers = () => {
  // Trigger this when the My Cart template is loaded
  console.log('CART HANDLERS HAVE BEEN TRIGGERED');
};

const addHandlers = () => {
  $('#cart-button').on('click', onShowCart);
};

module.exports = {
  addCartProductHandlers,
  addCartHandlers,
  addHandlers,
};
