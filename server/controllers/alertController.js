// import axios from 'axios';

// export const getWeatherAlerts = async (req, res) => {
//   try {
//     const { city } = req.query;

//     if (!city) {
//       return res.status(400).json({ message: "City is required" });
//     }

//     const apiKey = process.env.Weather_API_KEY;

//     const response = await axios.get(
//       "https://api.weatherapi.com/v1/forecast.json",
//       {
//         params: {
//           key: apiKey,
//           q: city,
//           days: 1,
//           alerts: "yes",
//         },
//       }
//     );

//     const alerts = response.data.alerts?.alert;

//     if (!alerts || alerts.length === 0) {
//       return res.status(200).json({
//         city,
//         message: "No weather alerts for this location",
//       });
//     }

//     const formattedAlerts = alerts.map((alert) => ({
//       headline: alert.headline,
//       severity: alert.severity,
//       urgency: alert.urgency,
//       areas: alert.areas,
//       category: alert.category,
//       description: alert.desc,
//       effective: alert.effective,
//       expires: alert.expires,
//     }));

//     return res.status(200).json({
//       city,
//       alerts: formattedAlerts,
//     });

//   } catch (error) {
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

import axios from "axios";

export const getWeatherAlerts = async (req, res) => {
  try {
    const city = req.query.city || "Mumbai"; // fallback city

    const apiKey = process.env.WEATHER_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        success: false,
        message: "API key not configured",
      });
    }

    const response = await axios.get(
      "https://api.weatherapi.com/v1/forecast.json",
      {
        params: {
          key: apiKey,
          q: city,
          days: 1,
          alerts: "yes",
        },
      }
    );

    const alertsData = response.data?.alerts?.alert || [];

    // ✅ No alerts case
    if (alertsData.length === 0) {
      return res.status(200).json({
        success: true,
        city,
        alerts: [],
        message: "No active weather alerts",
        lastUpdated: new Date().toISOString(),
      });
    }

    // ✅ Format alerts cleanly
    const formattedAlerts = alertsData.map((alert) => ({
      headline: alert.headline,
      severity: alert.severity,
      urgency: alert.urgency,
      category: alert.category,
      areas: alert.areas,
      description: alert.desc,
      effective: alert.effective,
      expires: alert.expires,
      instruction: alert.instruction || "Follow local authority guidance",
    }));

    return res.status(200).json({
      success: true,
      city,
      count: formattedAlerts.length,
      alerts: formattedAlerts,
      lastUpdated: new Date().toISOString(),
    });

  } catch (error) {
    console.error("Weather Alert Error:", error.response?.data || error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch weather alerts",
    });
  }
};