import mongoose from "mongoose";

const forecastSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true
    },
    date: Date,
    minTemp: Number,
    maxTemp: Number,
    humidity: Number,
    condition: String
  },
  { timestamps: true }
);

const Forecast = mongoose.model("Forecast", forecastSchema);

export default Forecast;
