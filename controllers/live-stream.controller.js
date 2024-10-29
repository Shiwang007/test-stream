const LiveStream = require("../models/live-stream.model");

exports.createLiveStream = async (req, res) => {
  const { value } = req.body;

  if (!value) {
    return res.status(400).json({ success: false, message: "Value is required" });
  }

  try {
    let liveStreamUrl = await LiveStream.findOne();
    if (liveStreamUrl) {
      liveStreamUrl.value = value;
      await liveStreamUrl.save();
    } else {
      liveStreamUrl = new LiveStream({ value });
      await liveStreamUrl.save();
    }
    return res
      .status(200)
      .json({
        success: true,
        message: "Live Stream Url saved successfully",
        value,
      });
  } catch (error) {
    console.error("Error saving Live Stream Url:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}

exports.getLiveStreamUrl =  async (req, res) => {
  try {
    const liveStreamUrl = await LiveStream.findOne();
    if (!liveStreamUrl) {
      return res.status(404).json({ success: false, message: "No data found" });
    }
    return res.status(200).json({ success: true, value: liveStreamUrl.value });
  } catch (error) {
    console.error("Error fetching Live Stream Url:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}
