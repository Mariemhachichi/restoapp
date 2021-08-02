const express = require('express')
const router = express.Router()

const plats = require('../controlor/platControlor')
router.get('/get',plats.getPlat)
router.post('/add',plats.addPlat)
router.put('/id/update',plats.updatePlat)
router.delete('id/delete',plats.deletePlat)

module.exports = router 