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
  console.log($(this).data().productid);
  let productid = $(this).data().productid;
  papi.showProduct(productid)
    .then(pui.showProductSuccess)
    .catch(pui.showProductFailure);
};

const addHandlers = function () {
  $('#home-button').on('click', onIndexProducts);
  $('#home-nozama').on('click', onIndexProducts);
  $('#content').on('click', '#home-crumb', onIndexProducts);
  $('#content').on('click', '#home-crumb-footer', onIndexProducts);
  $('#content').on('click', '.product-image', onShowProduct);

};

module.exports = {
  onIndexProducts,
  addHandlers,
};
