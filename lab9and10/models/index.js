const mongoose = require('mongoose');

const db = {};

db.mongoose = mongoose;
db.product = require('./product.model');
db.category = require('./category.model');

module.exports = db;