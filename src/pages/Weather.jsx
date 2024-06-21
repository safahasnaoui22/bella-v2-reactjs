import "./Weather.css";
import React, { useEffect, useState } from "react";

const Weather = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Sousse,TN&units=metric&appid=ffd191bf964e751eb4b2bb52b78c2b96`
        );
        if (!response.ok) {
          const errorDetails = await response.json();
          throw new Error(`Failed to fetch weather data: ${response.status} ${response.statusText} - ${errorDetails.message}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading weather data...</p>;
  }

  if (error) {
    console.error('Error fetching weather data:', error);
    return <p>Error: {error}</p>;
  }

  return (
    <div className="weathercontainer">
      <div className="containerweather">
        <div className="Circle1"></div>
        <div className="Circle2"></div>
        <div className="Circle3"></div>
        {data && (
          <>
            <div className="Condition">
            <div className="Location">
              <p>{data.name}</p>
            </div>
              <p className="weatherdes">{data.weather[0].description}</p>
            </div>
          
            <div className="Temp">
              <p>{Math.round(data.main.temp)}<span id="F">°C</span></p>
            </div>
            <div className="Time">
              <p>Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
              <p>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
            </div>
           
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;
