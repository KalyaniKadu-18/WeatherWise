import axios from "axios";
import weather from '../models/weather.js';

export const getWeather = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({ message: "City is required" });
    }

    const apiKey = process.env.WEATHER_API_KEY;

    const response = await axios.get(
      "https://api.weatherapi.com/v1/current.json",
      {
        params: {
          key: apiKey,
          q: city,
          aqi: "no",
        },
      }
    );

    const data = response.data;

    // 🔥 Send formatted data for frontend
    const formattedData = {
      city: data.location.name,
      temp: data.current.temp_c,
      feelsLike: data.current.feelslike_c,
      condition: data.current.condition.text,
      icon: `https:${data.current.condition.icon}`, 
      humidity: data.current.humidity,
      windSpeed: data.current.wind_kph,
    };

    res.status(200).json(formattedData);

  } catch (error) {
    console.error("Current Weather Error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getForecastWeather = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({ message: "City is required" });
    }

    const apiKey = process.env.WEATHER_API_KEY;

    const response = await axios.get(
      "https://api.weatherapi.com/v1/forecast.json",
      {
        params: {
          key: apiKey,
          q: city,
          days: 5,        
          aqi: "no",
          alerts: "no",
        },
      }
    );

    const data = response.data;

    // 🔥 Format Daily Forecast
    const dailyForecast = data.forecast.forecastday.map((day) => ({
      date: day.date,
      max: day.day.maxtemp_c,
      min: day.day.mintemp_c,
      condition: day.day.condition.text,
      icon: day.day.condition.icon,
      humidity: day.day.avghumidity,
      rainChance: day.day.daily_chance_of_rain,
    }));

    // 🔥 Format Hourly Forecast (Next 5 hours)
    const currentHour = new Date().getHours();

    const hourlyForecast = data.forecast.forecastday[0].hour
      .slice(currentHour, currentHour + 5)
      .map((hour) => ({
        time: hour.time.split(" ")[1],
        temp: hour.temp_c,
        icon: hour.condition.icon,
      }));

    res.status(200).json({
      city: data.location.name,
      temp: data.current.temp_c,
      min: data.forecast.forecastday[0].day.mintemp_c,
      max: data.forecast.forecastday[0].day.maxtemp_c,
      condition: data.current.condition.text,
      hourly: hourlyForecast,
      forecast: dailyForecast,
    });

  } catch (error) {
    console.log(error.response?.data || error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};