import axios from "axios";

const BASE_URL = "http://localhost:8000/weather"; 

// Get Current Weather
export const getWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/liveweather`, {
      params: { city }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching current weather:", error);
    throw error;
  }
};

// Get Forecast Weather
export const getForecastWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: { city }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast:", error);
    throw error;
  }
};