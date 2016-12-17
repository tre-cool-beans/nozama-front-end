'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const store = require('../store');
const capi = require('./capi');
const cui = require('./cui');

const onUpdateCart = function (event) {
  event.preventDefault();
  let data = store.user.cart;
  data.push(getFormFields(this));
  console.log("THIS IS DATA FROM ADD TO CART");
  console.log(data);
  capi.updateCart(data)
    .then(cui.updateCartSuccess)
    .catch(cui.failure);
};

const onShowCart = function (event) {
  event.preventDefault();
  console.log("clicked cart");
  capi.showCart()
    .then(cui.showCartSuccess)
    .catch(cui.failure);
};

const addProductHandlers = () => {
  $('.purchase').off('submit');
  $('.purchase').on('submit', onUpdateCart);
};

const addCartHandlers = () => {
  console.log('CART HANDLERS HAVE BEEN TRIGGERED');
};

const addHandlers = () => {
  $('#cart-button').on('click', onShowCart);
};

module.exports = {
  addProductHandlers,
  addCartHandlers,
  addHandlers,
};
