import Card from "./Card";


const CardsHolder = () => {
    return (
        <>
            <div className="container mx-auto flex flex-col justify-center items-center">
                <h2 className='text-center text-5xl font-bold text-[#1f2937] mt-[5rem]'>Friends to keep close in your life</h2>
                <p className='text-[#244d3f] font-medium text-center py-2'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
                <button className="p-3 bg-[#244d3f] text-white font-bold my-8 rounded-md cursor-pointer">+ Add a Friend</button>
            </div>
            <div className="container mx-auto pb-8 p-3 border-b border-gray-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex flex-col items-center justify-center bg-white shadow-md p-8 rounded-xl"><h2 className="text-[#244d3f] text-4xl font-bold">10</h2><p className="text-[#64748b] text-[18px]">Total Friend</p></div>
                    <div className="flex flex-col items-center justify-center bg-white shadow-md p-8 rounded-xl"><h2 className="text-[#244d3f] text-4xl font-bold">10</h2><p className="text-[#64748b] text-[18px]">Total Friend</p></div>
                    <div className="flex flex-col items-center justify-center bg-white shadow-md p-8 rounded-xl"><h2 className="text-[#244d3f] text-4xl font-bold">10</h2><p className="text-[#64748b] text-[18px]">Total Friend</p></div>
                    <div className="flex flex-col items-center justify-center bg-white shadow-md p-48rounded-xl"><h2 className="text-[#244d3f] text-4xl font-bold">10</h2><p className="text-[#64748b] text-[18px]">Total Friend</p></div>
                </div>
            </div>
            {/* cards section */}
            <div className="container mx-auto mt-8 p-3">
                <h2 className="py-2 text-2xl font-bold text-[#1f2937]">Your friends</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
                    <Card/><Card/><Card/><Card/><Card/><Card/><Card/>
                </div>
            </div>
        </>

    );
};

export default CardsHolder;