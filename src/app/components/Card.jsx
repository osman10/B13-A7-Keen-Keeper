import Image from 'next/image';
import Link from 'next/link';

const Card = ({ item }) => {
    const { id, name, picture, days_since_contact, tags, status } = item;

    return (
        <Link href={`/timeline/${id}`}>
            <div className="p-6 flex flex-col justify-center items-center hover:shadow-md shadow rounded-md bg-white">
                <Image src={picture} width={80} height={80} alt='David Kim' className='rounded-full' />
                <h2 className='pb-3 pt-2 text-[20px] font-bold text-[#1f2937]'>{name}</h2>
                <p className='text-[12px] text-[#64748b]'>{days_since_contact}d ago</p>
                <div className='flex items-center justify-center gap-1 '>
                    {tags.map((tag, index) => {
                        return (
                            <p key={index} className='px-3 py-2 my-3 rounded-full bg-[#cbfadb] font-bold uppercase text-[#244d3f]'>{tag}</p>
                        )
                    })}
                </div>
                <p
                    className={`
                    ${status === "Overdue" && "bg-[#ef4444]"}
                    ${status === "Almost Due" && "bg-[#efad44]"}
                    ${status === "On-Track" && "bg-[#244d3f]"}
                    px-3 py-2 my-1 rounded-full font-bold  text-white`}>{status}
                </p>
            </div>
        </Link>
    );
};

export default Card;