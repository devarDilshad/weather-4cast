import React from "react";
import LiveSearch from "./liveSearch";
import { getDayName, getMonthName } from "../utils/DateConverter";

const Mobile = ({ forecastdata, setPlace }) => {
  return (
    <div className="flex flex-col justify-center gap-4 items-center py-10 w-full backdrop-blur-sm bg-white/30 rounded md:w-5/12 md:gap-8">
      {/* live search or drop down list */}
      <LiveSearch setPlace={setPlace} />
      {/* location temp */}
      <div className=" flex flex-col justify-center items-center gap-3 border-b-[1px] py-5">
        <h1 className="text-primary text-4xl sm:text-5xl text-center">
          {" "}
          {forecastdata.location.name + ", " + forecastdata.location.country}
        </h1>
        <h2 className="text-primary text-5xl">
          {forecastdata.current.temp_c}°C
        </h2>
        <p className="text-secondary flex justify-center items-center">
          <i className="fa-solid fa-wind mr-2"></i>
          {forecastdata.current.wind_kph} k/h, &nbsp;
          {forecastdata.current.condition.text}
        </p>
        <p className="text-secondary">{forecastdata.current.last_updated}</p>
      </div>
      {/* next 3 days forecast */}
      <ul className="flex flex-col justify-center items-center gap-5 w-full">
        {forecastdata.forecast.forecastday.map((day) => {
          return (
            <li
              key={day.date}
              className="flex justify-between max-w-[20rem] items-center text-primary px-4 w-full"
            >
              <div className="flex gap-2 items-center">
                <img src={day.day.condition.icon} alt="" />
                <div className="flex flex-col">
                  <h2>
                    {getDayName(day.date)}, {getMonthName(day.date)}
                  </h2>
                  <p>{day.day.condition.text}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center border-l-[1px] border-secondary pl-2 min-w-[4rem]">
                <p>{day.day.maxtemp_c}°</p>
                <p>{day.day.mintemp_c}°</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Mobile;
