// WeatherLog.js
const mongoose = require("mongoose");

const WeatherLogSchema = new mongoose.Schema(
  {
    city: { type: String, trim: true },
    country: { type: String, trim: true },

    // Coordinates from the client (browser geolocation or IP fallback you send)
    coords: {
      lat: { type: Number },
      lon: { type: Number },
    },

    // GeoJSON for future geospatial queries (optional but handy)
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      // [lon, lat]
      coordinates: {
        type: [Number],
        // undefined = omit field if no coords
        default: undefined,
      },
    },

    // Captured from the request (server-side, trustworthy)
    ip: { type: String },
    userAgent: { type: String },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

// Index for geospatial queries if you ever need "near me" analytics
WeatherLogSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("WeatherLog", WeatherLogSchema);
