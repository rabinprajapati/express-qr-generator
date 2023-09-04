const router = require("express").Router();
const qrController = require("./qr.controller");

console.log("qqqqqqqqqqqqqqqq");

router.get("/", (req, res) => {
  res.render("qr");
});

router.post("/", async (req, res, next) => {
  // res.send(req.body.url);
  console.log("sssssssssssssssssssssssss");
  try {
    const { url } = req.body;
    if (!url) throw new Error("URL required");
    const result = await qrController.createQR(url);
    res.send(result);
    // res.json({ data: url, message: "success" });
    res.render("qr", { data: url });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
