'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const capi = require('./capi');
const cui = require('./cui');


const onIndexCartProducts = function (event) {

  event.preventDefault();
  capi.indexCartProducts()
  .then(cui.indexCartProductsSuccess)
  .catch(cui.failure);
};

const onCreateCartProduct = function (event) {
  event.preventDefault();
  let cart_product = getFormFields(this);
  capi.createCartProduct(cart_product)
    .then(cui.createCartProductSuccess)
    .catch(cui.failure);
};

const onUpdateCartProduct = function (event) {
  event.preventDefault();

  let product_id = $(this).data().id;

  let data = {
    _id: product_id,
    size: $('#' + product_id + '-size').val(),
    quantity: $('#' + product_id + '-quantity').val(),
  };

  if (!data.size) {delete data.size};
  if (!data.quantity) {delete data.quantity};

  console.log('THIS BE UPDATA');
  console.log(data);

  // figure out how to get _id, quantity, and size into data
  capi.updateCartProduct(data)
    .then(cui.updateCartProductSuccess)
    .catch(cui.failure);
};

const onDestroyCartProduct = function (event) {
  event.preventDefault();

  let data = {
    _id: $(this).data().id
  };

  capi.destroyCartProduct(data)
    .then(cui.destroyCartProductSuccess)
    .catch(cui.failure);
};

const onCheckout = () => {
  // This is almost useless indirection, but I don't want
  // to require content-render in here.
  cui.checkoutSuccess();
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
  $('.destroy-cart-product-button').off();
  $('#checkout-button').off();

  $('.update-cart-button').on('click', onUpdateCartProduct);
  $('.destroy-cart-product-button').on('click', onDestroyCartProduct);
  $('#checkout-button').on('click', onCheckout);
};

const addHandlers = () => {
  $('#cart-button').on('click', onIndexCartProducts);
};

module.exports = {
  addProductPageHandlers,
  addCartProductHandlers,
  addHandlers,
};
