import React from "react";
import { Polar, Pie, Radar, Bar } from "react-chartjs-2";
import '../assets/App.css'


function PolarChart() {
    const chartData = [10, 20, 30, 40, 50];
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Cumulative Info Of Covid Death",
        data: chartData,
        backgroundColor: [
          "#ffe333",
          "#cc4477",
          "#ff8833",
          "#ff5533",
          "#ff4444",
          "#ff5555",
        ],
        hoverBackgroundColor: "lightseagreen",
      },
      {
        label: "Districts Affected",
        data: [14, 24, 34, 44, 54],
        backgroundColor: [
          "#ff5533",
          "#ff4444",
          "#ff5555",
          "#ffe333",
          "#cc4477",
          "#ff8833",
          
        ],
        hoverBackgroundColor: "lightpink",
        hoverBorderWidth: "5px",
      },
    ],
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div className="row">
        <div className="col-6">
          <h1>Pie Chart!</h1>
          <Bar data={data} />
        </div>
        <div className="col-6">
          <h1>Polar Chart!</h1>
          <Polar data={data} />
        </div>
      </div>
    </div>
  );
}

export default PolarChart;
