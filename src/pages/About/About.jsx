
import { BsDownload } from 'react-icons/bs';
import img from '../../assets/fotor-202403285527.png'
import './About.css'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
      
    }, []);

    return (
        <div className='mb-12 mx-6 mt-24  lg:mx-12'>
            <h2 className='text-3xl lg:text-5xl text-center font-bold mb-8'>ABOUT <span className='text-indigo-500 '>ME</span></h2>
            <div className='lg:flex flex-row justify-center items-center'>
            
            <div className='flex-1 flex justify-center items-center '>
                <div className=' css-after-gradiant ' data-aos="fade-right">
                    <img className='' src={img} alt="" />

                </div>
                    
            </div>


            <div className='flex-1 px-3 mt-6 lg:mt-0 lg:p-0' data-aos="fade-left">
                <h2 className="text-xl lg:text-3xl font-bold mb-3">So, Who am I..?</h2>
                <p> I have found my passion in web development. I love spending time coding and enjoy exploring new things. I have a lots of interest in machine learning and artificial intelligence.I am currently pursuing my graduation in Electrical Engineering at University of Chittagong</p>
                <div className='pt-4'>
                <a href='https://drive.google.com/file/d/1Wske4VVmb4rFHliOw1G0QkDrnxR5bSZD/view?usp=sharing' download >
                    <div>
                        <button className="bg-indigo-500  px-4 py-4 text-black font-semibold">
                        <div className="flex gap-2 justify-center items-center">
                        <BsDownload></BsDownload>
                         Download Resume
                        </div>
                        </button ></div>
                        
                    </a>
                </div>
            </div>

        </div>
        </div>
    );
};

export default About;