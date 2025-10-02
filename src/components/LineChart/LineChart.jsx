import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Price"]]);

  useEffect(() => {
    if (historicalData?.prices) {
      const dataCopy = [["Date", "Price"]];

      historicalData.prices.forEach((item) => {
        const date = new Date(item[0]); 
        const price = item[1];          
        dataCopy.push([date, price]);
      });

      console.log("Chart Data Preview:", dataCopy.slice(0, 5)); 
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="300px"
      options={{
        legend: { position: "bottom" },
        hAxis: { title: "Date", format: "MMM dd" }, 
        vAxis: { title: "Price" },
        series: { 0: { color: "#1a73e8" } },
      }}
    />
  );
};

export default LineChart;
