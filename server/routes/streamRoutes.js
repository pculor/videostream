const { Router } = require('express');
const Validations = require('../middleware/Validations');
const StreamController = require('../controllers/StreamController');

const router = Router();

router
  .route('/')
  .post(Validations.Stream, StreamController.CheckStreams);


module.exports = router;
