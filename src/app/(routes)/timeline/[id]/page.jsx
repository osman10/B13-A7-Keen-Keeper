"use client";
import { TimeLineContext } from "@/app/lib/context/TimeLineContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FiArchive, FiPhoneCall } from "react-icons/fi";
import { LuMessageSquareQuote } from "react-icons/lu";
import { PiBellSimpleZBold, PiVideoCameraBold } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";

const Page = () => {
  const params = useParams();

  const [item, setItem] = useState(null);

  const{timeLineData, setTimeLineData} =useContext(TimeLineContext)

  // const [timeLineData, setTimeLineData] = useState([]);


  // ✅ Fetch data
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(
          (d) => String(d.id) === String(params.id)
        );
        setItem(found);
        
      });
  }, [params.id]);

  // ✅ Add timeline item
  const handleTimeline = (type) => {
    const newItem = {
      id: Date.now(),
      type: type,
      name: item.name,
      time: new Date().toLocaleDateString("en-US", {month: "long", day: "numeric", year: "numeric",})
    };

    setTimeLineData((prev) => [...prev, newItem]);
    toast.success("Added to timeline.")
  };


  console.log(timeLineData)

  // ✅ Loading state
  if (!item)
    return (
      <div className="min-h-[300px] flex items-center justify-center">
        <span className="loading loading-spinner text-info"></span>
      </div>
    );

  const { name, picture, days_since_contact, tags, status, bio, goal, next_due_date} = item;

  return (
    <div className="flex flex-col md:flex-row gap-4">

      {/* Left (1/3) */}
      <div className="w-full md:w-1/3 p-4 flex flex-col space-y-3">
        <div className="p-6 flex flex-col items-center shadow hover:shadow-md rounded-md bg-white">
          <Image
            src={picture}
            width={80}
            height={80}
            alt={name}
            className="rounded-full"
          />

          <h2 className="pt-2 text-[20px] font-bold text-[#1f2937]">
            {name}
          </h2>

          <p className="text-[12px] text-[#64748b]">
            {days_since_contact}d ago
          </p>

          <div className="flex gap-1 flex-wrap justify-center">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="px-3 py-1 my-1 rounded-full bg-[#cbfadb] font-bold uppercase text-[#244d3f]"
              >
                {tag}
              </p>
            ))}
          </div>

          <p
            className={`
              ${status === "Overdue" && "bg-[#ef4444]"}
              ${status === "Almost Due" && "bg-[#efad44]"}
              ${status === "On-Track" && "bg-[#244d3f]"}
              px-3 py-1 my-1 rounded-full font-bold text-white
            `}
          >
            {status}
          </p>

          <p className="text-[#64748b] text-base italic text-center">
            "{bio}"
          </p>

          <p className="text-[#64748b] text-sm text-center">
            <span className="font-semibold">Preferred:</span> email
          </p>
        </div>

        <button className="p-4 flex justify-center items-center gap-2 shadow hover:shadow-md rounded-sm bg-white font-bold">
          <PiBellSimpleZBold /> Snooze 2 weeks
        </button>

        <button className="p-4 flex justify-center items-center gap-2 shadow hover:shadow-md rounded-sm bg-white font-bold">
          <FiArchive /> Archive
        </button>

        <button className="p-4 flex justify-center items-center gap-2 shadow hover:shadow-md rounded-sm text-[#ef4444] bg-white font-bold">
          <RiDeleteBin6Line /> Delete
        </button>
      </div>



      {/* Right (2/3) */}
      <div className="w-full md:w-2/3 p-4 flex flex-col space-y-6">

        {/* Stats */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col items-center p-4 shadow hover:shadow-md bg-white w-full">
            <h2 className="text-3xl font-bold text-[#244d3f]">
              {days_since_contact}
            </h2>
            <p className="text-[#64748b]">Days Since Contact</p>
          </div>

          <div className="flex flex-col items-center p-4 shadow hover:shadow-md bg-white w-full">
            <h2 className="text-3xl font-bold text-[#244d3f]">
              {goal}
            </h2>
            <p className="text-[#64748b]">Goal (Days)</p>
          </div>

          <div className="flex flex-col items-center p-4 shadow hover:shadow-md bg-white w-full">
            <h2 className="text-3xl font-bold text-[#244d3f]">
              {next_due_date}
            </h2>
            <p className="text-[#64748b]">Next Due</p>
          </div>
        </div>
        {/* Relationship goal */}
        <div className="shadow hover:shadow-md p-6 bg-white rounded-md">
           <div className="flex justify-between">
              <h1 className="text-[#244d3f] text-[20px] font-bold mb-4">Relationship Goal</h1>
              <button className="btn">Edit</button>
            </div>  
            <p className="text-gray-400 text-base">Connect every <span className="font-bold text-gray-700">30 days</span></p>
        </div>
        {/* Actions */}
        <div className="shadow p-6 bg-white rounded-md">
          <h1 className="text-[#244d3f] text-[20px] font-bold mb-4">
            Quick Check-In
          </h1>
          {/* button section  */}
          <div className="flex flex-col md:flex-row gap-5">
            <button
              onClick={() => handleTimeline("Call")}
              className="w-full"
            >
              <div className="flex flex-col items-center p-4 shadow hover:shadow-md bg-[#f8fafc]">
                <FiPhoneCall className="text-3xl" />
                <p>Call</p>
              </div>
            </button>

            <button
              onClick={() => handleTimeline("Text")}
              className="w-full"
            >
              <div className="flex flex-col items-center p-4 shadow hover:shadow-md bg-[#f8fafc]">
                <LuMessageSquareQuote className="text-3xl" />
                <p>Text</p>
              </div>
            </button>

            <button
              onClick={() => handleTimeline("Video")}
              className="w-full"
            >
              <div className="flex flex-col items-center p-4 shadow hover:shadow-md bg-[#f8fafc]">
                <PiVideoCameraBold className="text-3xl" />
                <p>Video</p>
              </div>
            </button>
          </div>

        </div>


      </div>


    </div>
  );
};

export default Page;