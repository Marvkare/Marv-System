const {Router} =require('express')
const router = Router();

const { renderTools, contador } = require('../controllers/tools.controllers')

router.get('/tools', renderTools)
router.post('/contador', contador)

module.exports = router;
