const express = require('express');
const router = express.Router();
const mydbcontroller = require('../controller/dbcontroller.js')

router.get('/', mydbcontroller.getAll)
router.get('/:id', mydbcontroller.getOne)
router.post('/', mydbcontroller.create)
router.put('/:id', mydbcontroller.update)
router.delete('/:id', mydbcontroller.delete)
module.exports = router;

