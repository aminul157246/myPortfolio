

import { MdOutlineDesignServices } from "react-icons/md"
import { FaRegPaperPlane } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { TbBrandAirtable } from "react-icons/tb";

import img1 from '../../assets/html.png'
import img2 from '../../assets/css.png'
import img3 from '../../assets/js.jpeg'
import img4 from '../../assets/react.png'
import img5 from '../../assets/node.png'
import img6 from '../../assets/mongo.png'
// import img7 from '../../assets/firebase.png'


const MyExperience = () => {
    return (
        <div id='experience ' className='mx-auto mt-12 max-w-7xl'>

<p className="text-indigo-500 text-center">30+ projects completed using HTML,CSS, JS, React js, node js , mongoDB, firebase</p>
            <h1 className='text-5xl font-bold text-center  mb-12'>MY EXPERIENCE </h1>

            <div className=" grid grid-cols-3 lg:grid-cols-6 justify-center  ">
                <div className=''>
                    <img className='w-24 h-24  rounded-xl'  src={img1} alt="" />

                </div>
                <div className=''>
                    <img className='w-24 h-24 rounded-xl  ' src={img2} alt="" />
                </div>
                <div className=''>
                    <img className='w-24 h-24 rounded-xl' src={img3} alt="" />
                </div>
                <div className=''>
                    <img className='w-24 h-24 rounded-xl' src={img4} alt="" />
                </div>
                <div className=''>
                    <img className='w-24 h-24 rounded-xl' src={img5} alt="" />
                </div>


                <div className=''>
                    <img className='w-24 h-24 rounded-xl' src={img6} alt="" />
                </div>
            </div>




            {/* here  */}

            <div className="grid grid-cols-1  lg:grid-cols-4 mt-8">

                <div className='w-64 h-64 bg-base-200 space-y-2 p-16'>
                    <MdOutlineDesignServices className="text-8xl text-emerald-500    "></MdOutlineDesignServices>
                    <h3 className="text-2xl
                    font-bold  ">DESIGN</h3>
                </div>
                <div className='w-64 h-64 bg-base-200 space-y-2 p-16 '>
                    <SlBadge className="text-8xl text-emerald-500"></SlBadge>
                    <h3 className="text-2xl
                    font-bold  flex items-center justify-center">QUALITY</h3>
                </div>
                <div className='w-64 h-64 bg-base-200 space-y-2 p-16 '>
                <FaRegPaperPlane className="text-8xl text-emerald-500"></FaRegPaperPlane>
                    <h3 className="text-2xl
                    font-bold  flex items-center justify-center">CREATIVITY</h3>
                </div>
                <div className='w-64 h-64 bg-base-200 space-y-2 p-16 '>
                    <TbBrandAirtable className="text-8xl text-emerald-500"></TbBrandAirtable>
                    <h3 className="text-2xl
                    font-bold  flex items-center justify-center">BRANDING</h3>
                </div>

            </div>




        </div>
    );
};

export default MyExperience;