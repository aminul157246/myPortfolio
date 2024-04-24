import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
    return (
        <div>
            <footer className=" text-center mx-6 lg:mx-12 text-gray-400  p-4 bg-base-100  rounded-xl mt-12 py-12">
                <p>Copyright © 2024 - All right reserved</p>
                <div className="flex gap-2 justify-center  items-center mt-6">

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
            </footer>
        </div>
    );
};

export default Footer;