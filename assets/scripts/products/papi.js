'use strict';

const config = require('../config');
const store = require('../store');

const indexProducts = () =>
  $.ajax({
      url: config.host + '/products',
      method: 'GET'
  });

const showProduct = (productid) =>
  $.ajax({
      url: config.host + '/products/' + productid,
      method: 'GET'
  });


module.exports = {
  indexProducts,
  showProduct,
};
