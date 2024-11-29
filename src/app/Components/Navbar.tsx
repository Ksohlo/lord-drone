import Link from 'next/link';
import React from 'react';
import { TbHexagon3D } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex gap-2 shadow-md">
        <div className="flex-1">
            <a className="btn btn-ghost text-base md:text-xl"><TbHexagon3D />Ogunnubi Eniola</a>
        </div>
        <div className="flex md:mr-20 ">
            <ul className="menu menu-horizontal px-1 flex gap-5">
                <Link href="" ><FaLinkedin className='text-2xl hover:scale-110 duration-700' /></Link>
                <Link href="" ><GrInstagram className='text-2xl hover:scale-110 duration-700' /></Link>
                <Link href="" ><BsTwitterX className='text-2xl hover:scale-110 duration-700' /></Link>
            </ul>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Navbar