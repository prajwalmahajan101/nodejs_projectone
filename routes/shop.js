const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const adminData =require('./admin');

const router= express.Router();


router.get('/',(req,res,next) => {
    const products = adminData.products;
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    // res.render('shop',{prods:products,docTitle:"My Shop!!",path:"/shop"});
    res.render('shop',{prods:products,docTitle:"My Shop!!",path:"/shop",hasProducts: products.length > 0,productCSS:true,formCSS:false,isShop:true});
});

module.exports=router;