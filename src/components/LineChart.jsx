import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { getDayName } from "../utils/DateConverter";

const LineChart = ({ forecastdata }) => {
  const today = forecastdata.forecast.forecastday[0].hour;

  const data = {
    labels: ["0am", "4am", "8am", "12pm", "4pm", "8pm", "11pm"],
    datasets: [
      {
        label: getDayName(forecastdata.forecast.forecastday[0].date),
        data: [
          today[0].temp_c,
          today[4].temp_c,
          today[8].temp_c,
          today[12].temp_c,
          today[16].temp_c,
          today[20].temp_c,
          today[23].temp_c,
        ],
        fill: false,
        borderColor: "#eeffff",
        backgroundColor: "#99D0FF",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#eeffff",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "eeffff" },
      },
      y: {
        display: true,
        suggestedMax: 45,
        suggestedMin: 20,
        ticks: { color: "eeffff" },
      },
    },
  };
  return (
    <section className="flex flex-col justify-center gap-4 items-center w-full backdrop-blur-sm bg-gray-500/50 rounded-xl p-6">
      <div className="md:w-2/3 w-full">
        <Line data={data} options={options} />
      </div>
    </section>
  );
};

export default LineChart;
