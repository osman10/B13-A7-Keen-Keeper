"use client"
import TimeLine from "@/app/components/TimeLine";
import { TimeLineContext } from "@/app/lib/context/TimeLineContext";
import { useContext } from "react";



const page = () => {

    const { timeLineData } = useContext(TimeLineContext)
    return (
        <div className="container mx-auto">
            <TimeLine timeLineData={timeLineData}/>
        </div>
    );
};

export default page;