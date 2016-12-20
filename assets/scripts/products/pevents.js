'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const papi = require('./papi');
const pui = require('./pui');

const onIndexProducts = function () {
  papi.indexProducts()
    .then(pui.indexProductsSuccess)
    .catch(pui.indexProductsFailure);
};

const onShowProduct = function () {
  console.log('made it to onShowProduct');
  papi.showProduct()
    .then(pui.showProductSuccess)
    .catch(pui.showProductFailure);
};

const addHandlers = function () {
  $('#home-button').on('click', onIndexProducts);
  $('#content').on('click', '.img-responsive', onShowProduct);

};

module.exports = {
  onIndexProducts,
  addHandlers,
};
