const express = require('express');
const router = express.Router();

const homeController = require('./homeController');

router.use(express.static('public'));

//Special route for home page:
router.get('/', function(req, res)
{
	res.redirect('/home');
});

router.use('/home', function(req, res, next)
{
	//Here put things we want to send to the controller
	next();
}, homeController);



module.exports = router;