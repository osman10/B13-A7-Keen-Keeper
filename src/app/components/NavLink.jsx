'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`${isActive ? 'text-white bg-[#244d3f]' : 'bg-none text-[#64748b]'} font-bold p-[12px] mx-2 text-base`}
        >
            {children}
        </Link>
    );
};

export default NavLink;