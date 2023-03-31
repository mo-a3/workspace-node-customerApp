var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/authenticate',function(req,res,next){
  console.log(req.body);
  if(req.body.username == req.body.password && typeof(req.body.username)!= 'undefined'){
    res.send({result:'success',msg:'user login successful.'})
  }else{
    res.send({result:'fail',msg:'user login failed.'})
  }
})

module.exports = router;
