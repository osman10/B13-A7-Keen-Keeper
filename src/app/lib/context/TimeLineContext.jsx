"use client"
import { createContext, useState } from "react";

export const TimeLineContext = createContext()

const TimeLineContextProvider =({children})=>{
    const[timeLineData, setTimeLineData] = useState([])

    const data = {
        timeLineData,
        setTimeLineData
    }
    return(
        <TimeLineContext.Provider value={data}>
            {children}
        </TimeLineContext.Provider>
    )
};
export default TimeLineContextProvider;