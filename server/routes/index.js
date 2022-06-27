const { Router } = require('express');
const streamRoutes = require('./streamRoutes')

const router = Router();

router.use('/stream', streamRoutes);

module.exports = router;
