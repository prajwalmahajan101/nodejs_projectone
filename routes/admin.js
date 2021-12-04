const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();
const products=[];

router.get('/add-product',(req,res,next) => {
    // console.log('in the another Middleware!!!');
    // res.render('add-product',{docTitle:"Add Product!!!",path:"/admin/add-product",productCSS:true,formCSS:true,isAddProduct:true});
    res.render('add-product',{docTitle:"Add Product!!!",path:"/admin/add-product"});
});


router.post('/add-product',(req,res,next)=>{
    products.push({title:req.body.title});
    // console.log(products);
    res.redirect('/');
});

exports.routes = router;
exports.products= products;