/**
 * @module nodeModule router
 *
 * @description
 * All routing for this resource/api should be defined here.
 * This route then gets added to the base api routing.
 */

const express = require('express');
const statusCodes = require('http-status-codes');

const router = express.Router({ mergeParams: true });

const controller = require('./controller');

router.get('/', async function (req, res) {
  const result = controller.getFunc(
    req.body.message.parameter1,
    req.body.message.parameter2
  );

  res.status(statusCodes.OK).json(result);
});

module.exports = router;
