'use strict';

const config = require('../config');
const store = require('../store');

const indexProducts = () =>
  $.ajax({
      url: config.host + '/products',
      method: 'GET'
  });

const showProduct = (product) =>
  $.ajax({
      url: config.host + '/products/' + product._id,
      method: 'GET'
  });


module.exports = {
  indexProducts,
  showProduct,
};
