import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className=" text-center   p-4 bg-base-100  rounded-xl mt-12 py-12 text-black">
                <p>Copyright © 2023 - All right reserved</p>
                    <div className="flex gap-2  pt-2  items-center justify-center">
                        <a href="https://github.com/aminul157246">
                            <FaGithub className="text-2xl hover:text-indigo-500"></FaGithub>
                        </a>
                        <a href="https://www.linkedin.com/in/aminulislam157246/">
                            <FaLinkedinIn className="text-2xl hover:text-indigo-500"></FaLinkedinIn>
                        </a>
                        <a href="https://web.facebook.com/profile.php?id=100049235346943"> <FaFacebookF className="text-2xl hover:text-indigo-500"></FaFacebookF>
                        </a>
                    </div>
            </footer>
        </div>
    );
};

export default Footer;