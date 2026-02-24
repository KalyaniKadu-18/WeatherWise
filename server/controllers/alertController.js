import axios from 'axios';

export const getWeatherAlerts = async (req,res) => {
    try {
        const {city} = req.query;

        if(!city){
            return res.status(400).json({message:"City is required"});
        }

        const apiKey = process.env.Weather_API_KEY;

        const response = await axios.get("https://api.weatherapi.com/v1/forecast.json",
              {
        params: {
          key: apiKey,
          q: city,
          days: 1,
          alerts: "yes",
        },
      }
        );
        
         const alerts = response.data.alerts?.alert;

    if (!alerts || alerts.length === 0) {
      return res.status(200).json({
        city,
        message: "No weather alerts for this location",
      });
    }

    const formattedAlerts = alerts.map((alert) => ({
      headline: alert.headline,
      severity: alert.severity,
      urgency: alert.urgency,
      areas: alert.areas,
      category: alert.category,
      description: alert.desc,
      effective: alert.effective,
      expires: alert.expires,
    }));
        
    } catch (error) {
        return res.status(500).json({message:"Internal server error"})
    }
}