const express = require("express");
const router = express.Router();
const authRoute = require("./authRoute.js")
const productRoute = require("./productRoute.js")
const path = require("path")

//  ----> prefix

router.use("/api/images", express.static(path.join(__dirname, "../uploads")))
router.use("/api/auth", authRoute)
router.use("/api/products", productRoute)



module.exports = router;