const {Router} = require('express')
const router = Router();

const { renderUser } = require('../controllers/users.controllers')

router.get('/users', renderUser)

module.exports = router;
