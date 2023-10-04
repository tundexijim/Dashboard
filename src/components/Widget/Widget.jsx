import React from "react";
import { bardata } from "@/app/data/data";
const Widget = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      {bardata.map((data) => (
        <div
          key={data.id}
          className="bg-white flex items-center justify-between p-4 rounded-lg lg:flex-1"
        >
          <div>
            <p className="font-bold">${data.total}</p>
            <p className="">{data.status}</p>
          </div>
          <p className="bg-blue-400 py-2 px-1 rounded-lg">
            <span>18%</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Widget;
