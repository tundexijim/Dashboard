"use client";
import { LineChart } from "@mui/x-charts";
import React from "react";
import { useMediaQuery } from "@mui/material";

const Charts = () => {
  const isSmallScreen = useMediaQuery("(max-width:700px)");
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  return (
    <div className="bg-white w-full rounded-lg pt-4 h-full ">
      <div className="flex items-center justify-between mx-4">
        <p className="font-bold">Exchange Rate</p>
        <small>Edit</small>
      </div>
      <div className="ml-4">
        <p>
          1 USD = <span className=" text-blue-500">780 NAIRA</span>
        </p>
        <small>Today</small>
      </div>
      <LineChart
        width={isSmallScreen ? 250 : 600}
        height={400}
        series={[
          { data: pData, label: "pv" },
          { data: uData, label: "uv" },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
      />
    </div>
  );
};

export default Charts;
