const express = require("express");
const axios = require("axios");
const router = express.Router();

function buscarDetail(req, res) {
  const itemsPath = `https://api.mercadolibre.com/items/${req.params.id}`;
  const itemsDescriptionPath = `https://api.mercadolibre.com/items/${
    req.params.id
  }/description`;
  const itemId = `${req.params.id}`;
  return axios
    .all([axios.get(itemsPath), axios.get(itemsDescriptionPath)])
    .then(
      axios.spread((items, descriptions) => {
        const item = items.data;
        const currency = item.currency_id;
        const amount = Math.floor(item.price);
        const decimals = +(item.price % 1).toFixed(2).substring(2);
        const description = descriptions.data;
        const response = {
          author: {
            name: "Adrian",
            lastname: "Barragan"
          },
          item: {
            id: itemId,
            title: item.title,
            price: {
              currency: currency,
              amount: amount,
              decimals: decimals
            },
            picture: item.pictures[0].url,
            condition: item.condition,
            freeShipping: item.shipping.free_shipping,
            soldQuantity: item.sold_quantity,
            description: description.plain_text
          }
        };
        const categoriesPath = `https://api.mercadolibre.com/categories/${
          item.category_id
        }`;
        axios.get(categoriesPath).then(items => {
          response.categories = items.data.path_from_root.map(
            item => item.name
          );
          return res.send(response);
        });
      })
    )
    .catch(() => res.send(`${req.params.id}`));
}

module.exports = buscarDetail;
