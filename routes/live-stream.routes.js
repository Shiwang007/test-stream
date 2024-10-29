const express = require("express");
const { getLiveStreamUrl, createLiveStream } = require("../controllers/live-stream.controller");

const router = express.Router();

router.post("/add-live-stream-url", createLiveStream);
router.get("/get-live-stream-url", getLiveStreamUrl);

module.exports = router;
