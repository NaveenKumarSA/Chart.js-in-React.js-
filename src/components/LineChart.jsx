import React from "react";
import { Line, Bar, Doughnut, Radar, Polar } from "react-chartjs-2";

function LineChart() {
  const datasetData1 = [1.8, 2, 3, 4, 5];
  const datasetData2 = [4.5, 5.5, 3.5, 2.3, 4.2];
  const dataToRender = ["Jan", "Feb", "Mar", "Apr", "May"];
  const data = {
    labels: dataToRender,
    datasets: [
      {
        label: "Sales for 2020 (M) ",
        data: datasetData1,
        borderColor: "lightseagreen",
        borderWidth: "25px",
        backgroundColor: " rgba(31, 178, 171, 0.4)",
        pointBackgroundColor: "Blue",
        hoverBackgroundColor: "rgba(31, 178, 171, 0.8)",
        pointBorderColor: "black",
      },
      {
        label: "Sales for 2010 (M) ",
        data: datasetData2,
        borderColor: "green",
        borderWidth: "25px",
        backgroundColor: "rgba(941, 50, 145, 0.4) ",
        pointBackgroundColor: "red",
        hoverBackgroundColor: "rgba(941, 50, 145, 0.8) ",
        pointBorderColor: "black",
        hoverBorderWidth: "5px",
      },
    ],
  };
  return (
    <div>
      <Polar data={data} bg={"lightblue"} />
      <Radar data={data} bg={"lightblue"} />
      <Line data={data} bg={"lightblue"} />
      <br />
      <Bar data={data} />
      <br />
      <Doughnut data={data} />
    </div>
  );
}

export default LineChart;
