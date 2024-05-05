const { MarketPlace } = require('../../../models');

//Membuat informasi suatu produk
async function createMarketPlace(name, category, description, price, quantity) {
  return MarketPlace.create({
    name,
    category,
    description,
    price,
    quantity,
  });
}

//mendapatkan informasi produk
async function getMarketplace() {
  return MarketPlace.find({});
}

//menambahkan atau memperbaiki informasi produk
async function updateMarketPlace(
  id,
  name,
  category,
  description,
  price,
  quantity
) {
  return MarketPlace.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        name,
        category,
        description,
        price,
        quantity,
      },
    }
  );
}

//menghapus info produk
async function deleteMarketPlace(id) {
  return MarketPlace.deleteOne({ _id: id });
}

module.exports = {
  createMarketPlace,
  getMarketplace,
  updateMarketPlace,
  deleteMarketPlace,
};
