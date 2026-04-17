"use client"
import { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimeLineContext } from '../lib/context/TimeLineContext';

const Chart = () => {


    const { timeLineData } = useContext(TimeLineContext)

    const callLength = timeLineData.filter(item => item.type === "Call").length;
    const textLength = timeLineData.filter(item => item.type === "Text").length;
    const videoLength = timeLineData.filter(item => item.type === "Video").length;


        // #region Sample data
    const data = [
        { name: 'Text', value: callLength, fill: '#7e35e1' },
        { name: 'Call', value: textLength, fill: '#244d3f' },
        { name: 'Video', value: videoLength, fill: '#37a163' }
    ];

    return (
        <div className="container mx-auto py-[5rem]">
            <h2 className='text-center md:text-left text-5xl font-bold text-[#1f2937] mb-6'>Friendship Analytics</h2>
            <div className='rounded-md bg-white shadow-md  p-8'>
                <p className='text-[#244d3f] font-medium'>By Interaction Type</p>
                <div className='flex justify-center items-center'>
                    <PieChart
                        style={{
                            width: "100%",
                            maxWidth: "347px",
                            maxHeight: "80vh",
                            aspectRatio: "1",
                            paddingBottom: "50px"
                        }}
                        responsive
                    >
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            cornerRadius="50%"
                            paddingAngle={5}
                            isAnimationActive={true}
                        />
                        <Legend wrapperStyle={{ marginTop: 20 }} />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Chart;


