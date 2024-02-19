import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";





const Navbar = () => {

    function setActive(event) {
        const navLinks = document.querySelectorAll('.menu a');
        navLinks.forEach((navLink) => {
          navLink.classList.remove('active');
        });
        event.target.classList.add('active');
      }

    

    return (
        <div className="navbar bg-base-200 fixed px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                    <li><a onClick={setActive} href="#home">HOME</a></li>
                    <li><a onClick={setActive} href="#about">ABOUT</a></li>
                    <li><a onClick={setActive} href="#skill">MY SKILL</a></li>
                    <li><a onClick={setActive} href="#experience">MY EXPERIENCE</a></li>
                    <li><a onClick={setActive} href="#project">MY PROJECTS</a></li>
                    <li><a onClick={setActive} href="#contact">CONTACT</a></li>

                    </ul>
                </div>
                <a href="#home" className="btn btn-ghost text-xl">AminuL</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">


                   
                    <li><a onClick={setActive} href="#home">HOME</a></li>
                    <li><a onClick={setActive} href="#about">ABOUT</a></li>
                    <li><a onClick={setActive} href="#skill">MY SKILL</a></li>
                    <li><a onClick={setActive} href="#experience">MY EXPERIENCE</a></li>
                    <li><a onClick={setActive} href="#project">MY PROJECTS</a></li>
                    <li><a onClick={setActive} href="#contact">CONTACT</a></li>



                </ul>
            </div>
            <div className="navbar-end">
            <div className="flex gap-2   items-center">

<a href="https://github.com/aminul157246">
    <FaGithub className="text-2xl hover:text-indigo-500"></FaGithub>
</a>
<a href="https://www.linkedin.com/in/aminulislam157246/">
    <FaLinkedinIn className="text-2xl hover:text-indigo-500"></FaLinkedinIn>
</a>
<a href="https://web.facebook.com/profile.php?id=100049235346943"> <FaFacebookF className="text-2xl hover:text-indigo-500"></FaFacebookF>
</a>
</div>
            </div>
        </div>
    );
};

export default Navbar;