"use client";

import { useState } from "react";
import Image from "next/image";
import Call from "../assets/images/call.png";
import Text from "../assets/images/text.png";
import Video from "../assets/images/video.png";

const TimeLine = ({ timeLineData }) => {
  const [filter, setFilter] = useState("All");

  // filter logic
  const filteredData =
    filter === "All"
      ? timeLineData
      : timeLineData.filter((item) => item.type === filter);

  // image map (cleaner)
  const imageMap = {
    Call,
    Text,
    Video,
  };

  return (
    <div>
      <h2 className="mt-20 text-5xl font-bold mb-3 text-[#1f2937]">
        Timeline
      </h2>

      {timeLineData.length === 0 ? (
        <div className="min-h-[300px] flex items-center justify-center">
          <p className="text-gray-400 text-2xl">No activity yet</p>
        </div>
      ) : (
        <div>
          {/* ✅ Dropdown */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="select outline-none focus:outline-none"
          >
            <option value="All">All</option>
            <option value="Call">Call</option>
            <option value="Video">Video</option>
            <option value="Text">Text</option>
          </select>

          {/* ✅ Timeline list */}
          <div className="flex flex-col gap-5 py-6">
            {filteredData.length === 0 ? (
              <p className="text-gray-400">No matching activity</p>
            ) : (
              filteredData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded shadow hover:shadow-md p-4"
                >
                  <div className="flex gap-4 items-center">
                    <Image
                      src={imageMap[item.type]}
                      alt={item.type}
                      className="w-[45px] h-[38px]"
                    />

                    <div className="">
                      <p className="font-semibold text-xl text-gray-500">
                        <span className="font-bold text-[#244d3f]">{item.type}</span> with {item.name}
                      </p>
                      <p className="text-xl text-gray-500">{item.time}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeLine;