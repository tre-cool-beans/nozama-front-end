'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const store = require('../store');

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

const onDestroyCartProduct = function (event) {
  event.preventDefault();

  let data = {
    _id: $(this).data().id
  };

  capi.destroyCartProduct(data)
    .then(cui.destroyCartProductSuccess)
    .catch(cui.failure);
};

const onEmptyCart = function () {
  capi.emptyCart()
    .then(cui.emptyCartSuccess)
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

  if (!store.user) {
    $('#add-to-cart-button').text('Sign In to Add to Cart');
    $('.purchase').on('click', (event) => event.preventDefault());
  } else {
    $('#add-to-cart-button').text('Add to Cart');
    $('.purchase').on('click', onCreateCartProduct);
  }
};

const onUpdateCartProduct = function (data) {
  capi.updateCartProduct(data)
  .then(cui.updateCartProductSuccess)
  .catch(cui.failure);
};

const onUpdateQuantity = function(event) {
  event.preventDefault();

  let data = {
    _id: $(this).data().id,
    quantity: $(this).val(),
  };

  onUpdateCartProduct(data);
};

const onUpdateSize = function(event) {
  event.preventDefault();

  let data = {
    _id: $(this).data().id,
    size: $(this).val(),
  };

  onUpdateCartProduct(data);
};


const addCartProductHandlers = () => {
  $('.destroy-cart-product-button').off();
  $('#checkout-button').off();

  $('.quantity-dropdown').off();
  $('.size-dropdown').off();

  $('.quantity-dropdown').on('change', onUpdateQuantity);
  $('.size-dropdown').on('change', onUpdateSize);

  $('.destroy-cart-product-button').on('click', onDestroyCartProduct);
  $('#checkout-button').on('click', onCheckout);
};

const addHandlers = () => {
  $('#cart-button').on('click', onIndexCartProducts);
};

module.exports = {
  addProductPageHandlers,
  addCartProductHandlers,
  onEmptyCart,
  addHandlers,
};
