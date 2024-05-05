const marketPlaceRepository = require('./marketplace-repository');

//membuat
async function createMarketPlace(name, category, description, price, quantity) {
  try {
    await marketPlaceRepository.createMarketPlace(
      name,
      category,
      description,
      price,
      quantity
    );
  } catch (err) {
    return null;
  }

  return true;
}

//membaca
async function getMarketPlaces() {
  const marketplaces = await marketPlaceRepository.getMarketplace();

  const results = [];
  for (let i = 0; i < marketplaces.length; i += 1) {
    const marketplace = marketplaces[i];
    results.push({
      id: marketplace.id,
      name: marketplace.name,
      category: marketplace.category,
      description: marketplace.description,
      price: marketplace.price,
      quantity: marketplace.quantity,
    });
  }

  return results;
}

//Update stok
async function updateMarketPlace(
  id,
  name,
  category,
  description,
  price,
  quantity
) {
  const marketplace = await marketPlaceRepository.getMarketplace(id);

  if (!marketplace) {
    return null;
  }

  try {
    await marketPlaceRepository.updateMarketPlace(
      id,
      name,
      category,
      description,
      price,
      quantity
    );
  } catch (err) {
    return null;
  }

  return true;
}

//menghapus info produk
async function deleteMarketPlace(id) {
  const marketplace = await marketPlaceRepository.getMarketplace(id);

  if (!marketplace) {
    return null;
  }

  try {
    await marketPlaceRepository.deleteMarketPlace(id);
  } catch (err) {
    return null;
  }

  return true;
}

module.exports = {
  createMarketPlace,
  getMarketPlaces,
  updateMarketPlace,
  deleteMarketPlace,
};
