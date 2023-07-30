import React, { useEffect, useState } from "react";
import Mobile from "./Mobile";
import LineChart from "./LineChart";
import { fetchData, options } from "../utils/fetchData";

const Hero = () => {
  const [forecastdata, setForecastdata] = useState([]);
  // const [place, setPlace] = useState({ lng: "45.44", lat: "35.56" });
  const [bgImage, setBgImage] = useState("");
  const isReady = forecastdata.current;
// efewf

  const [place, setPlace] = useState(
    () =>
      JSON.parse(localStorage.getItem("cordinates")) || {
        lng: "45.44",
        lat: "35.56",
      }
  );

  useEffect(() => {
    localStorage.setItem("cordinates", JSON.stringify(place));
  }, [place]);

  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${place.lat}%2C${place.lng}&days=3`;
  // api call
  useEffect(() => {
    const weatherData = async () => {
      const weatherData = await fetchData(url, options);
      setForecastdata(weatherData);
    };
    weatherData();
  }, [place]);

  useEffect(() => {
    if (isReady) {
      if (forecastdata.current.condition.text) {
        setBgImage("bg-[url('./assets/sunIm.jpg')]");
      } else {
        setBgImage("bg-[url('./assets/rain.jpg')]");
      }
    }
  });

  return (
    <section
      className={`${bgImage} w-full h-auto md:h-[100vh] bg-center bg-cover bg-no-repeat`}
    >
      <div className="max-w-[130rem] mx-auto p-4">
        <div className="flex flex-col justify-center items-start md:flex-row-reverse gap-4">
          {forecastdata.location ? (
            <>
              <Mobile forecastdata={forecastdata} setPlace={setPlace} />
              <LineChart forecastdata={forecastdata} />
            </>
          ) : (
            <p className="text-center align-middle">Loading</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
