
import { BsDownload } from 'react-icons/bs';
import img from '../../assets/fotor-202403285527.png'
import './About.css'

const About = () => {
    return (
        <div className='mb-12 ' id='about'>
            <h2 className='text-5xl text-center font-bold mb-8'>ABOUT <span className='text-indigo-500 '>ME</span></h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center items-center'>
            
            <div className='flex-1 flex justify-center items-center '>
                <div className=''>
                    <img className='w-[400px]' src={img} alt="" />

                </div>
                    
            </div>


            <div className='flex-1 p-12 lg:p-0'>
                <h2 className="text-3xl font-bold">So, Who am I..?</h2>
                <p> I have found my passion in web development. I love spending time coding and enjoy exploring new things. I have a lots of interest in machine learning and artificial intelligence.I am currently pursuing my graduation in Electrical Engineering at University of Chittagong</p>
                <div className='pt-4'>
                <a href='https://drive.google.com/file/d/1j1bOLJD0JXOzrcEgkyCYCYKc2D_9Ktaa/view' download >
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