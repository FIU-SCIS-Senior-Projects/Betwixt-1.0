var express = require('express');
var router = express.Router();

var group_controller = require('../controllers/groupController');


//GROUP ROUTES
router.get('/create', group_controller.create_group)



module.exports = router;
