import React from "react";
import { Bar, Line, Doughnut, Radar, Polar } from "react-chartjs-2";

function BarChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "june"],

    datasets: [
      {
        label: "Covid Complaints Registered",
        data: [1.8, 3, 4, 7, 2, 5.4],
        backgroundColor: [
          "#ff9933",
          "#66b3ff",
          "#FF2499",
          "#ff3333",
          "#7D0552",
          "#cc6633",
        ],
        hoverBackgroundColor: [
          "#ccffee",
          "",
          "yellow",
          "lightseagreen",
          "gray",
        ],
      },
    ],
  };

  return (
    <div>
      {/* <Bar data={data} /> */}
      <Bar data={data} />
    </div>
  );
}

export default BarChart;
