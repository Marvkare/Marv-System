const {Router} = require('express');
const router = Router();

const { renderSchedule } = require('../controllers/schedule.controllers')

router.get('/schedule',renderSchedule)

module.exports = router;
