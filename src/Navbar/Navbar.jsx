import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import logo from '../../src/assets/logo.png';

import  './Navbar.css';

const Navbar = () => {

    const navLinks = <>

        <li><a onClick={setActive}   href="#home">HOME</a></li>
        <li><a onClick={setActive}  href="#about">ABOUT</a></li>
        <li><a onClick={setActive}  href="#skill">MY SKILL</a></li>
        <li><a onClick={setActive}  href="#experience">MY EXPERIENCE</a></li>
        <li><a onClick={setActive}  href="#project">MY PROJECTS</a></li>
        <li><a onClick={setActive}  href="#contact">CONTACT</a></li>

    </>

    function setActive(event) {
        const navLinks = document.querySelectorAll('.menu a');
        navLinks.forEach((navLink) => {
            navLink.classList.remove('active');
        });
        event.target.classList.add('active');
    }



    return (
        <div className="navbar bg-base-200  z-10 pr-6 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu bg menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100   ">

                        {navLinks}

                    </ul>
                </div>
                <button><a href="#home"><img className="  w-32 min-h-fit" src={logo} alt="" /></a></button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 bg">



                    {navLinks}



                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-2   items-center">

                    <a href="https://github.com/aminul157246">
                        <FaGithub className="text-xl "></FaGithub>
                    </a>
                    <a href="https://www.linkedin.com/in/aminulislam157246/">
                        <FaLinkedinIn className="text-xl text-blue-500"></FaLinkedinIn>
                    </a>
                    <a href="https://web.facebook.com/profile.php?id=100049235346943"> <FaFacebookF className="text-xl text-blue-800"></FaFacebookF>
                    </a>
                    <a href="https://twitter.com/aminul157246"> <RiTwitterXLine className="text-xl "></RiTwitterXLine>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;