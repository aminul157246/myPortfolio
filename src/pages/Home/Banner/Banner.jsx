import { BsDownload } from "react-icons/bs";
import './Banner.css'
const Banner = () => {
    return (

        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  lg:h-[100vh]  lg:mb-12 border-5">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:justify-center lg:items-center pl:2 lg:pl-24 pt-12  lg:pt-48 lg:gap-12'>

                <div className='lg:flex-1'>
                    
                    <div className="wrapper">
                    <h4 className=" md:text-2xl lg:text-3xl font-bold">Hi , I'm</h4>
                        <div className="text-area">
                            <span>A</span>
                            <span>M</span>
                            <span>I</span>
                            <span>N</span>
                            <span>U</span>
                            <span>L</span>&nbsp; &nbsp; 
                            <span>I</span>
                            <span>S</span>
                            <span>L</span>
                            <span>A</span>
                            <span>M</span>
                        </div>
                        <p>Frontend Web Developer</p>
                    </div>
                    

                    <div className="pt-80 lg:pt-52">
                    <a href='https://drive.google.com/file/d/1j1bOLJD0JXOzrcEgkyCYCYKc2D_9Ktaa/view' download >
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
                <div className="image flex-1 ">

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