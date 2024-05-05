const express = require('express');

const authentication = require('./components/authentication/authentication-route');
const users = require('./components/users/users-route');
const marketplace = require('./components/marketplace/marketplace-route')
const digitalbanking = require('./components/digitalbank/digitalbank-route')

module.exports = () => {
  const app = express.Router();

  authentication(app);
  users(app);
  marketplace(app);
  digitalbanking(app);

  return app;
};
