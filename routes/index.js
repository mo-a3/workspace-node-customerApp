var express = require('express');
var router = express.Router();
var customerMongo = require('../services/customer-mongodb')
var customerService = require('../services/customer-service');

var customers = [ 
  {id:1,name:'Vivek', email:'vivek@abc.com', phone:'8989389333',address:"Singapore"},
  {id:2,name:'Dev', email:'dev@abc.com', phone:'866u389333',address:"India"},
  {id:3,name:'Ameer', email:'ameer@abc.com', phone:'877779333',address:"Asia"},
  {id:4, name:'Dian', email:'dian@gmail.com', phone:"1234567876", address:'Singapore'},
  {id:5, name:'Apple', email:'dian@gmail.com', phone:"1234567876", address:'Singapore'},
  {id:6, name:'Orange', email:'dian@gmail.com', phone:"1234567876", address:'Singapore'}
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/login')
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

 
router.get('/dashboard', function(req, res, next) {
  res.render('index', { title: 'Dashboard' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

router.get('/customer', async(req, res, next) =>{
  let customers = await customerMongo.getCustomers();
  res.render('customer', { title: 'Customer', data:customers });
});

router.get('/customer/add', function(req, res, next) {
  res.render('customer-add', { title: 'Add Customer', data:customerService.getCustomers() });
});

router.get('/customer/edit/:id', async(req, res, next)=>{
  let customer = await customerMongo.getCustomerById(req.params.id)
  res.render('customer-edit', { title: 'Edit Customer',customer});
});

module.exports = router;


