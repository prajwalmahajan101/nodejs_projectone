const Product = require("../models/products");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      docTitle: "My Shop!!",
      path: "/products",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      docTitle: "My Shop!!",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", { docTitle: "My Cart!!", path: "/cart" });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/cart", { docTitle: "Checkout !!", path: "/checkout" });
};
