import Image from 'next/image';


const Card = () => {
    return (
        <div className="p-6 flex flex-col justify-center items-center hover:shadow-md shadow rounded-md bg-white">
            <Image src='/ellipse-1.png' width={80} height={80} alt='David Kim' className='rounded-full'/>
            <h2 className='pb-3 pt-2 text-[20px] font-bold text-[#1f2937]'>David Kim</h2>
            <p className='text-[12px] text-[#64748b]'>62d ago</p>
            <p className='px-3 py-2 my-3 rounded-full bg-[#cbfadb] font-bold uppercase text-[#244d3f]'>work</p>
            <p className='px-3 py-3 my-1 rounded-full bg-[#efad44] font-bold uppercase text-white'>Almost Due</p>
        </div>
    );
};

export default Card;