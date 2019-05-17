const express = require("express");
const axios = require("axios");
const router = express.Router();

function buscarDetail(req, res) {
  const itemsPath = `https://api.mercadolibre.com/items/${req.params.id}`;
  const itemsDescriptionPath = `https://api.mercadolibre.com/items/${
    req.params.id
  }/description`;
  return axios
    .all([axios.get(itemsPath), axios.get(itemsDescriptionPath)])
    .then(
      axios.spread((items, descriptions) => {
        const item = items.data;
        const description = descriptions.data;
        const response = {
          item: {
            title: item.title,
            picture: item.pictures[0].url,
            price: {
              currency: item.currency_id,
              amount: item.price
            },
            condition: item.condition,
            freeShipping: item.shipping.free_shipping,
            description: description.plain_text,
            soldQuantity: item.sold_quantity
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
