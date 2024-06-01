"use client"
import { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from "next-auth/react";


const Navigation: React.FC = () => {
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const router = useRouter();
    const { data, status } = useSession();
    const handleSignOut = async () => {
        await signOut();
    }

    return (
        <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm fixed top-0">
            <nav className="mt-6 relative max-w-[85rem] w-full bg-gray-800 border border-gray-700 bg-opacity-80 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto" aria-label="Global">
                <div className="flex items-center justify-between">
                    <Link href="/" passHref>
                        <div className="flex-none text-xl font-bold text-white cursor-pointer" aria-label="Brand">K<span className="bg-clip-text bg-gradient-to-tl from-green-800 to-green-400 text-transparent">B</span>S</div>
                    </Link>
                    <div className="md:hidden">
                        <button type="button" className="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-700 text-white 
                            hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                            <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                    </div>
                </div>
                <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                    <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                        <Link href="/" passHref>
                            <div className="font-medium text-gray-400 md:py-6 hover:text-gray-500 cursor-pointer" aria-current="page">Home</div>
                        </Link>
                        <Link href="/about" passHref>
                            <div className="font-medium text-gray-400 md:py-6 hover:text-gray-500 cursor-pointer">About</div>
                        </Link>
                        <Link href="/events" passHref>
                            <div className="font-medium text-gray-400 md:py-6 hover:text-gray-500 cursor-pointer">Events</div>
                        </Link>
                        <Link href="/blogs" passHref>
                            <div className="font-medium text-gray-400 md:py-6 hover:text-gray-500 cursor-pointer">Blogs</div>
                        </Link>
                        <Link href="/team" passHref>
                            <div className="font-medium text-gray-400 md:py-6 hover:text-gray-500 cursor-pointer">Team</div>
                        </Link>
                        {status === "authenticated" ? (
                            <>
                                <div className="font-medium text-gray-400 md:py-6 hover:text-gray-500">{data.user.email}</div>
                                <button className="flex justify-center items-center gap-x-2 font-medium text-gray-400 hover:text-green-700 md:border-s md:border-gray-300 md:my-6 md:ps-6 hover:text-green-500" onClick={handleSignOut}>
                                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link href="/signin" passHref>
                                <div className="flex justify-center items-center gap-x-2 font-medium text-gray-400 hover:text-green-700 md:border-s md:border-gray-300 md:my-6 md:ps-6 hover:text-green-500 cursor-pointer">
                                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                    SignIn
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;
