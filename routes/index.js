const express = require('express');
const router = express.Router();
const mydbRouter= require ('./dbtodo')

router.use ('/mytodo',mydbRouter)
module.exports = router;

