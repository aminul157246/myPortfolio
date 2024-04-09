import { BsDownload } from "react-icons/bs";
import './Banner.css'
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {


    useEffect(() => {
        AOS.init();
        // AOS.refresh();
    }, []);


    return (

        <div className=" bg-gradient-to-r  from-indigo-400 from-0% via-sky-400 via-30% to-emerald-400 to-100%  lg:h-[100vh]  lg:mb-12 border-5">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:justify-center lg:items-center pl-0 lg:pl-24 pt-24  lg:pt-48 lg:gap-12'>

                <div className='lg:flex-1 p-8 lg:p-0'>

                    <div className="wrapper">
                        <h4 className=" md:text-2xl lg:text-3xl font-bold">Hi , I'm</h4>
                        <h3 data-aos="flip-down" data-aos-duration="3000" 
                           
                            className="text-3xl lg:text-6xl font-bold lg:font-semibold uppercase lg:mt-4">Aminul islam</h3>
                        <div className="typewriter">
                            <h1 className="text-2xl lg:text-5xl">Frontend Developer</h1>
                        </div>
                    </div>


                    <div className="  pt-6">
                        <a href='https://drive.google.com/file/d/1byV41dSw5owds5croLf1s_sBQDYyPQKg/view?usp=sharing' download >
                            <div>
                                <button className="bg-white px-4 py-4 text-black font-semibold">
                                    <div className="flex gap-2 justify-center items-center">
                                        <BsDownload></BsDownload>
                                        Download Resume
                                    </div>
                                </button ></div>

                        </a>
                    </div>





                </div>
                <div className="image mt-12 lg:mt-0 flex-1 ">

                </div>

            </div>
            <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    );
};

export default Banner;