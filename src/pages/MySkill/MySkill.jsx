
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const MySkill = () => {

  useEffect(() => {
        AOS.init({
            duration: 1200,
        });
      
    }, []);

    return (
        <div className="my-12 mx-6 lg:mx-12" id="skill">

            
            <h2 className="text-3xl lg:text-5xl font-bold text-center ">MY <span className="text-indigo-500">SKILL</span></h2>
            <p className=" text-center max-w-xs lg:max-w-3xl mx-auto my-8"> Familiar with HTML, CSS, Java script, React js, Node js, Express js, MongoDB. <br /> Additionally,   technologies such as Firebase, surge, netlify, github etc.
</p>

            <div className="grid grid-cols-3 gap-12 lg:p-8">
            <div className="text-center " data-aos="fade-right">
            <div className="radial-progress  text-emerald-500" style={{"--value":70}} role="progressbar">70%</div>
            <p className="font-bold text-xl">HTML</p>
            </div>

            <div className="text-center" data-aos="fade-up">
            <div className="radial-progress text-emerald-500" style={{"--value":60}} role="progressbar">60%</div>
            <p className="font-bold text-xl">CSS</p>
            </div>

            <div className="text-center" data-aos="fade-left">
            <div className="radial-progress text-emerald-500" style={{"--value":70}} role="progressbar">60%</div>
            <p className="font-bold text-xl">JS</p>
            </div>


            <div className="text-center" data-aos="fade-right">
            <div className="radial-progress text-emerald-500" style={{"--value":60}} role="progressbar">60%</div>
            <p className="font-bold text-xl">React JS</p>
            </div>

            <div className="text-center" data-aos="fade-up">
            <div className="radial-progress text-emerald-500" style={{"--value":40}} role="progressbar">40%</div>
            <p className="font-bold text-xl">Node JS</p>
            </div>

            <div className="text-center" data-aos="fade-left">
            <div className="radial-progress text-emerald-500" style={{"--value":35}} role="progressbar">35%</div>
            <p className="font-bold text-xl">Mongo DB</p>
            </div>

            </div>
        </div>
    );
};

export default MySkill;