import Marquee from "react-fast-marquee";

import img1 from '../../assets/html.png'
import img2 from '../../assets/css.webp'
import img3 from '../../assets/js.png'
import img4 from '../../assets/react.png'
import img5 from '../../assets/js.webp'
import img6 from '../../assets/mongo.png'
import img7 from '../../assets/fire-base.png'
import img8 from '../../assets/github-logo.png'
import img9 from '../../assets/vercel-logo.png'
import img10 from '../../assets/tail.png'
import img11 from '../../assets/vite.jpeg'


const MyExperience = () => {
    return (
        <div className="mt-12 mx-6 lg:mx-12  mb-24 ">
            <p className="text-indigo-500 text-center mt-12">40+ projects completed using HTML,CSS, JS, React js, node js , mongoDB, firebase</p>
            <h1 className='text-3xl mt-4 lg:text-5xl font-bold text-center  mb-12'>MY EXPERIENCE </h1>
        <Marquee>
            
            <img className=" ml-8 pt-3 w-16 h-16 lg:w-24 lg:h-24 " src={img1} alt="" />
            <img className=" ml-8 pt-3 w-16 h-16 lg:w-24 lg:h-24" src={img2} alt="" />
            <img className=" ml-8 pt-3 w-16 h-16 lg:w-24 lg:h-24" src={img3} alt="" />
            <img className=" ml-8 pt-3 w-16 h-16 lg:w-24 lg:h-24" src={img4} alt="" />
            <img className=" ml-8 pt-3 w-16 h-16 lg:w-24 lg:h-24" src={img5} alt="" />
            <img className=" ml-8 pt-3 w-16 h-16 lg:w-24 lg:h-24" src={img6} alt="" />
            <img className=" ml-8 pt-3 w-16 h-16 lg:w-24 lg:h-24" src={img7} alt="" />
            <img className=" ml-8 pt-3 w-16 h-16 lg:w-24 lg:h-24" src={img8} alt="" />
            <img className=" ml-8 pt-3 w-16 h-16 lg:w-24 lg:h-24" src={img9} alt="" />
            <img className=" ml-8 pt-3 w-16 h-16 lg:w-24 lg:h-24" src={img10} alt="" />
            <img className=" ml-8 pt-3 w-16 h-16 lg:w-24 lg:h-24" src={img11} alt="" />
           
        </Marquee>
    </div>
    );
};

export default MyExperience;