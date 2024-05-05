const marketPlaceService = require('./marketplace-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

//membuat marketplace
async function createMarketPlace(request, response, next) {
  try {
    const name = request.body.name;
    const category = request.body.category;
    const description = request.body.description;
    const price = request.body.price;
    const quantity = request.body.quantity;

    const success = await marketPlaceService.createMarketPlace(
      name,
      category,
      description,
      price,
      quantity
    );
    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create MarketPlace'
      );
    }
    return response
      .status(200)
      .json({ name, category, description, price, quantity });
  } catch (error) {
    return next(error);
  }
}

//mendapatkan info produk
async function getMarketPlaces(request, response, next) {
  try {
    const marketplaces = await marketPlaceService.getMarketPlaces();
    return response.status(200).json(marketplaces);
  } catch (error) {
    return next(error);
  }
}

//mengupdate informasi produk
async function updateMarketPlace(request, response, next) {
  try {
    const id = request.params.id;
    const name = request.body.name;
    const category = request.body.category;
    const description = request.body.description;
    const price = request.body.price;
    const quantity = request.body.quantity;

    const success = await marketPlaceService.updateMarketPlace(
      id,
      name,
      category,
      description,
      price,
      quantity
    );
    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update MarketPlace'
      );
    }

    return response.status(200).json({ id });
  } catch (error) {
    return next(error);
  }
}

//menghapus informasi produk
async function deleteMarketPlace(request, response, next) {
  try {
    const id = request.params.id;

    const success = await marketPlaceService.deleteMarketPlace(id);
    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete MarketPlace'
      );
    }

    return response.status(200).json({ id });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  createMarketPlace,
  getMarketPlaces,
  updateMarketPlace,
  deleteMarketPlace,
};
