'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const papi = require('./papi');
const pui = require('./pui');

const onIndexProducts = function () {
  papi.indexProducts()
    .then(pui.indexProductsSuccess)
    .catch(pui.indexProductsFailure);
};

const addHandlers = function () {
  $('#home-button').on('click', onIndexProducts);
};

module.exports = {
  onIndexProducts,
  addHandlers,
};
