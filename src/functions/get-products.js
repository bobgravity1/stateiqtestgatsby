//this loads in the products and returns a network status of 200 if completed

const products = require('./data/products.json');

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(products),
//json encoded products are returned in the body
  };
};
