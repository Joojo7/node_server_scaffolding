const express = require('express');
const router = express.Router();

const packageData = require('../../package.json');
const auth = require('../middlewares/setAuth');

// Any new resource api should imported here and then registered to
// router with proper api endpoint prefix (e.g /user user.route, /items items.route etc.)
//
// Do not remove the const purchaseTest = require('./purchase-test');
//** --route:import--- */ placeholder, if you use the cli to generate
// api resources, this works as placeholder to inject new route file requires.
//
// If you add a require manually, add it above the /** --route:import--- */ line.
const concern = require('./concern');
/** --route:import-- */

// Do not remove the router.use(purchaseTest.config.ENDPOINT, purchaseTest.route);
//** --route--- */ placeholder, if you use the cli to generate
// api resources, this works as placeholder to inject new routes.
//
// If you add a require manually, add it above the /** --route--- */ line.
router.get('/concern/health', (req, res) => {
  res.send({
    status: true,
    version: packageData.version,
    env: process.env.NODE_ENV,
  });
});

router.use(auth);
router.use(concern.config.ENDPOINT, concern.route);
/** --route-- */

module.exports = router;
