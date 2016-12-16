'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const papi = require('./papi');
const pui = require('./pui');

const onIndexProducts = function () {
  papi.indexProducts()
    .then(pui.indexProductsSuccess)
    .catch(pui.indexProductsFailure);
};

module.exports = {
  onIndexProducts,
};
