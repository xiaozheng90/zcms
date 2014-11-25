var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Zsslab' });
});

/*登陆页面*/
router.get('/login',function(req,res){
  var to={
    title : '登陆'
  };
  res.render('login',to);
});
module.exports = router;
