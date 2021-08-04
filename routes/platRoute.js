const express = require('express')
const router = express.Router()

const plat = require('../controlor/platControlor')
router.get('/get',plat.getPlat)
router.post('/add',plat.addPlat)
router.put('/:id/update',plat.updatePlat)
router.delete('/:id/delete',plat.deletePlat)

module.exports = router 
