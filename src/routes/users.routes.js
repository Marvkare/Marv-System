const {Router} = require('express')
const router = Router();

const { renderUser, addUser } = require('../controllers/users.controllers')

router.get('/users', renderUser)

router.post('/users/add', addUser)
module.exports = router;
