'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const capi = require('./capi');
const cui = require('./cui');

const onUpdateCart = function (event) {
  event.preventDefault();
  let cart_product = getFormFields(this);
  capi.updateCart(cart_product)
    .then(cui.updateCartSuccess)
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
  $('.purchase').off('submit');
  $('.purchase').on('submit', onUpdateCart);
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
