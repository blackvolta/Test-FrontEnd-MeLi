const express = require("express");
const axios = require("axios");
const router = express.Router();

function buscarItems(req, res) {
  const searchPath = `https://api.mercadolibre.com/sites/MLA/search?q=%27${
    req.params.query
  }%27&limit=4`;
  return axios
    .get(searchPath)
    .then(response => {
      const items = response.data.results;
      const itemsResponse = items.map(item => {
        const amount = Math.floor(item.price);
        const decimals = +(item.price % 1).toFixed(2).substring(2);
        return {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: amount,
            decimals: decimals
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping ? item.shipping.free_shipping : false,
          address: item.address ? item.address.state_name : ""
        };
      });
      let categories = [];
      if (response.data.filters[0] && response.data.filters[0].values[0]) {
        categories = response.data.filters[0].values[0].path_from_root.map(
          category => {
            return category.name;
          }
        );
      }
      const author = {
        name: "Adrian",
        lastname: "Barragan"
      };
      const searchResponse = {
        author: author,
        items: itemsResponse,
        categories: categories
      };
      return res.send(searchResponse);
    })
    .catch(() => res.send({ items: [], categories: [] }));
}

module.exports = buscarItems;
