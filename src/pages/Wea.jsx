import React, { useEffect, useState } from "react";
import Weather from "./Weather";

export default function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=ffd191bf964e751eb4b2bb52b78c2b96`
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      <Weather data={data} />
    </div>
  );
}
