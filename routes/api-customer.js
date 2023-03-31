var express = require('express');
var router = express.Router();
var customerMongo = require('../services/customer-mongodb')
var customerService = require('../services/customer-service');

// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
//   });
 

// get all
router.get('/',async(req,res,next)=>{
	var customers = await customerMongo.getCustomers()
	res.send(customers);
})

// get by Id
router.get('/:id',async(req,res,next)=>{
	var customer = await customerMongo.getCustomerById(req.params.id)
	res.send(customer);
})

// add new
router.post('/',async(req,res,next)=>{
	// req.body.id = Date.now();
	// customers.push(req.body);
	var result = await customerMongo.addCustomer(req.body)
	res.send(result);
})

// update 
router.put('/',async(req,res,next)=>{
	result  = await customerMongo.updateCustomer(req.body)
	res.send(result);
})

// delete
router.delete('/', async(req,res,next)=>{
	// let temp = customers.filter((item)=>(item.id != req.body.id));
	// customers = temp;
	 await customerMongo.deleteCustomer(req.body.id)
     res.send({result:"success",msg:"customer deleted"});
})

  module.exports = router;

