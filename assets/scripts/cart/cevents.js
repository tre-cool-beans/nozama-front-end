'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const papi = require('./capi');
const pui = require('./cui');

const onUpdateCart = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  console.log("THIS IS DATA FROM ADD TO CART");
  console.log(data);
  // papi.indexProducts()
  //   .then(pui.indexProductsSuccess)
  //   .catch(pui.indexProductsFailure);
};

const onShowCart = function (event) {
  event.preventDefault();
  console.log("clicked cart");
};

const addHandlers = () => {
  $('.purchase').on('submit', onUpdateCart);
  $('#cart-button').on('click', onShowCart);
};

module.exports = {
  addHandlers,
};
