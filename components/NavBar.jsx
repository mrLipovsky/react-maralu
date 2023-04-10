import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaHamburger } from "react-icons/fa";
import { FaDoorClosed } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

import {
    AiFillFacebook,
    AiTwotoneMail,
} from "react-icons/ai";

function NavBar() {
    const [navbar, setNavBar] = useState(false);
    const [darkMode, setDarkMode] = useState(false); 

    return(
        <nav className="flex flex-col bg-white dark:bg-black w-full fixed top-0 left-0 right-0 z-10">
            <div className="text-lg flex px-10 justify-end md:justify-center gap-12 py-3 text-black dark:text-white">
              <AiFillFacebook />
              <AiTwotoneMail />
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
            </div>
                
            <div className='flex-col mx-10 '>
                <div className="flex justify-between items-center ">
                    {/* LOGO */}
                    <Link rel="stylesheet" href="*/" >
                        <h1 className="text-2xl font-burtons text-black dark:text-white items-center ">MARALU s.r.o.
                        </h1>
                    </Link>
                {/* HAMBURGER MENU BTN */}
                <span className='md:hidden block'>
                    <button name="menu" className="text-black dark:text-white cursor-pointer text-4xl"
                    onClick={() => setNavBar(!navbar)} 
                    >  
                    {navbar ? (
                        <FaDoorClosed />
                    ) : (
                        <FaHamburger />
                    )}
                    </button>
                </span>
                </div>
                <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
                >          
                <ul className="h-screen md:h-auto items-center justify-center md:flex">
                    <li className="md:my-0 pb-10 text-xl text-black md:px-6 text-center md:border-b-0   border-none hover:bg-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link className='rounded-md' href="#" onClick={() => setNavbar(!navbar)}> Autodoprava</Link>
                    </li> 
                    <li className="md:my-0 pb-10 text-xl text-black md:px-6 text-center md:border-b-0   border-none hover:bg-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                    <a className='rounded-md' href="#" onClick={() => setNavbar(!navbar)}> Uctovnictvo</a>
                    </li>
                    <li className="md:my-0 pb-10 text-xl text-black md:px-6 text-center md:border-b-0  border-none hover:bg-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    <a className='rounded-md ' href="#" onClick={() => setNavbar(!navbar)}> O Nas</a>
                    </li>
                    <li className="md:my-0 pb-10 text-xl text-black md:px-6 text-center md:border-b-0  border-none hover:bg-purple-900   md:hover:text-purple-600 md:hover:bg-transparent">
                    <a className='rounded-md' href="#" onClick={() => setNavbar(!navbar)}> Kontakt</a>
                    </li>
                    <li className="md:my-0 pb-10 text-xl text-white md:px-6 text-center md:border-b-0  border-none hover:bg-purple-900   md:hover:text-purple-600 md:hover:bg-transparent">
                    <a className="bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-2 rounded-md
                    text-white" href="#" onClick={() => setNavbar(!navbar)}>Objednat</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        
    );
}

export default NavBar;