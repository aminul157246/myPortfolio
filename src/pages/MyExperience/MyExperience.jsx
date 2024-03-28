import Marquee from "react-fast-marquee";


import img1 from '../../assets/html.png'
import img2 from '../../assets/css.png'
import img3 from '../../assets/js.jpeg'
import img4 from '../../assets/react.png'
import img5 from '../../assets/node.png'
import img6 from '../../assets/mongo.png'
import img7 from '../../assets/firebase.png'


const MyExperience = () => {
    return (
        <div className="my-6">
            <p className="text-indigo-500 text-center mt-12">30+ projects completed using HTML,CSS, JS, React js, node js , mongoDB, firebase</p>
            <h1 className='text-5xl font-bold text-center  mb-12'>MY EXPERIENCE </h1>
        <Marquee>
            <img className=" h-44 rounded-full h- lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img1} alt="" />
            <img className=" h-44 rounded-full h- lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img2} alt="" />
            <img className=" h-44 rounded-full h- lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img3} alt="" />
            <img className=" h-44 rounded-full h- lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img4} alt="" />
            <img className=" h-44 rounded-full h- lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img5} alt="" />
            <img className=" h-44 rounded-full h- lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img6} alt="" />
            <img className=" h-44 rounded-full h- lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img7} alt="" />
            {/* <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img8} alt="" /> */}
        </Marquee>
    </div>
    );
};

export default MyExperience;