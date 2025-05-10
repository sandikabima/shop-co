const db = require("../utils/conn");
const { hashPassword } = require("../helper/bcrypt");
const User = require("./user");
const Product = require("./product");
const Cart = require("./cart");

const user = db.define(
  "User",
  User,
  {
    hooks: {
      beforeCreate(user) {
        (user.role = "costumer"), (user.password = hashPassword(user.password));
      },
    },
  },
  { tableName: "User" }
);

const product = db.define("Product", Product, { tableName: "Products" });
const cart = db.define("Cart", Cart, { tableName: "Carts" });

user.hasMany(cart, {
    foreignKey: 'userId',
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
});

product.hasMany(cart, {
    foreignKey: "productId",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  });
  
  cart.belongsTo(product, {
    foreignKey: "productId",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  });
  
  db.sync();
  
  module.exports = { user, product, cart };