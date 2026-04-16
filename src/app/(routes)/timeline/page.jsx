"use client"
import { TimeLineContext } from "@/app/lib/context/TimeLineContext";
import { useContext } from "react";



const page = () => {

    const { timeLineData, setTimeLineData } = useContext(TimeLineContext)
    return (
        <div className="container mx-auto">
            <div>
                <h2 className="text-lg font-bold mb-3">Timeline</h2>

                {timeLineData.length === 0 ? (
                    <p className="text-gray-400">No activity yet</p>
                ) : (
                    timeLineData.map((item) => (
                        <div key={item.id} className="border-b py-2">
                            <p className="font-semibold">{item.type}</p>
                            <p className="text-sm text-gray-500">{item.time}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default page;