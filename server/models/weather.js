import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true
    },
    temperature: Number,
    humidity: Number,
    windSpeed: Number,
    condition: String,
    icon: String,
    recordedAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

const Weather = mongoose.model("Weather", weatherSchema);

export default Weather;
