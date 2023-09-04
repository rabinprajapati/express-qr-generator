const router = require("express").Router();

const qrapi = require("../modules/qr/qr.api");
router.use("/qr", qrapi);

module.exports = router;
