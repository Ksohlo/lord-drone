import Link from 'next/link';
import React from 'react'
import { TbHexagon3D } from "react-icons/tb"
import { BsTwitterX } from 'react-icons/bs';
import { FaLinkedin } from "react-icons/fa6";
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
            <TbHexagon3D className='text-3xl' />
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <ul className="menu menu-horizontal px-1 flex gap-5">
                    <Link href="" ><FaLinkedin className='text-2xl hover:scale-110 duration-700' /></Link>
                    <Link href="" ><GrInstagram className='text-2xl hover:scale-110 duration-700' /></Link>
                    <Link href="" ><BsTwitterX className='text-2xl hover:scale-110 duration-700' /></Link>
            </ul>
        </nav>
    </footer>
  )
}

export default Footer