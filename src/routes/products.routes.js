const {Router} = require('express')
const router = Router();

const { renderProducts} = require('../controllers/products.controllers.js')

router.get('/products', renderProducts)

module.exports = router;
