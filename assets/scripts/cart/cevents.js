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

const addHandlers = () => {
  $('.purchase').on('submit', onUpdateCart);
};

module.exports = {
  addHandlers,
};
