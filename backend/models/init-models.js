var DataTypes = require("sequelize").DataTypes;
var _admins = require("./admins");
var _categories = require("./categories");
var _orders = require("./orders");
var _products = require("./products");
var _products_orders = require("./products_orders");
var _users = require("./users");

function initModels(sequelize) {
  var admins = _admins(sequelize, DataTypes);
  var categories = _categories(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var products_orders = _products_orders(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  products.belongsTo(categories, { as: "category", foreignKey: "category_id"});
  categories.hasMany(products, { as: "products", foreignKey: "category_id"});
  products_orders.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(products_orders, { as: "products_orders", foreignKey: "order_id"});
  products_orders.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(products_orders, { as: "products_orders", foreignKey: "product_id"});
  users.hasMany(orders, { foreignKey: 'user_id' }); // New association
  orders.belongsTo(users, { foreignKey: 'user_id' }); // New association


  return {
    admins,
    categories,
    orders,
    products,
    products_orders,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
