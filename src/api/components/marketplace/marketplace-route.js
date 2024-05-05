const express = require('express');
const authenticationMiddleware = require('../../middlewares/authentication-middleware');
const celebrate = require('../../../core/celebrate-wrappers');
const marketPlaceController = require('./marketplace-controller');
const marketPlaceValidator = require('./marketplace-validator');

const route = express.Router();

module.exports = (app) => {
  app.use('/marketplace', route);

  // Membuat Marketplace Toko
  route.post(
    '/',
    authenticationMiddleware,
    celebrate(marketPlaceValidator.createMarketPlace),
    marketPlaceController.createMarketPlace
  );

  // Mendapatkan info soal stok barang
  route.get(
    '/',
    authenticationMiddleware,
    marketPlaceController.getMarketPlaces
  );

  // Menambahkan atau memperbaiki info produk
  route.put(
    '/:id',
    authenticationMiddleware,
    marketPlaceController.updateMarketPlace
  );

  // Menghapus info suatu produk
  route.delete(
    '/:id',
    authenticationMiddleware,
    marketPlaceController.deleteMarketPlace
  );
};
