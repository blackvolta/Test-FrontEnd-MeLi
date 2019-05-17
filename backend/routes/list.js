const express = require("express");
const axios = require("axios");
const router = express.Router();

function buscarItems(req, res) {
  router.get("/api/items?q=​:query", (req, res) => {
    const searchPath = `https://api.mercadolibre.com/sites/MLA/search?q=%27${
      req.query.q
    }%27&limit=4`;
    return axios
      .get(searchPath)
      .then(response => {
        const items = response.data.results;
        const ids = items.map(item => item.id);
        if (items.length > 0) {
          const categoryId = items[0].category_id;
          const itemsPath = `https://api.mercadolibre.com/items?ids=${ids.join(
            ","
          )}`;
          const categoriesPath = `https://api.mercadolibre.com/categories/${categoryId}`;
          return axios.all([axios.get(itemsPath), axios.get(categoriesPath)]);
        }
      })
      .then(
        axios.spread((items, categories) => {
          return res.send({
            items: items.data.map(item => ({
              id: item.id,
              title: item.title,
              picture: item.pictures[0].url,
              price: {
                currency: item.currency_id,
                amount: item.price
              },
              condition: item.condition,
              freeShipping: item.shipping.free_shipping,
              location: item.seller_address.state.name
            })),
            categories: categories.data.path_from_root.map(item => item.name)
          });
        })
      )
      .catch(() => res.send({ items: [], categories: [] }));
  });
}

module.exports = buscarItems;
