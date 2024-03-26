const deviceController = require('../Controllers/deviceController');

const router = require('express').Router();

// use routers
router.post('/addDevice', deviceController.addDevice)

router.get('/allDevices', deviceController.getAllDevices)

router.get('/getDevicesByGroup/:id', deviceController.getDevicesByGroup)


// Products router
router.get('/:id', deviceController.getOneDevice)

router.put('/:id', deviceController.updateDevice)

router.delete('/:id', deviceController.deleteDevice)

module.exports = router