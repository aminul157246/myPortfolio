import img1 from '../../assets/home.png'
import img2 from '../../assets/22project.png'
import img3 from '../../assets/bridly.png'
import { FaChevronRight } from "react-icons/fa";
import './MyProject.css'

const MyProject = () => {
    return (
        <div className='' id='project'>
            <p className="text-indigo-500 text-center">VISIT MY PROJECTS AND KEEP YOUR FEEDBACK</p>
            <h2 className="text-5xl font-bold text-center">MY PROJECTS</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 justify-center items-center'>

                <div>
                    <a href="https://remarkable-babka-8ef47b.netlify.app/">



                        <div className="shadow-xl">
                            <div className="single-team">
                                <figure><img className='h-[250px] w-[250px] rounded-lg' src={img1} alt="Shoes" /></figure>

                                <div className=" team-text">
                                    <h2 className="text-2xl font-bold">New Home </h2>

                                    <div className="card-actions justify-end mt-16 flex items-center">
                                        <p>see project</p>
                                        <FaChevronRight className='text-3xl'></FaChevronRight>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

                </div>

                <div className='lg:mt-36'>
                    <a href="https://elegant-marzipan-f0ca7b.netlify.app/ ">


                        <div className=" shadow-xl">
                            <div className="single-team">


                                <figure><img className='h-[250px] w-[250px] rounded-lg' src={img3} alt="Shoes" /></figure>
                                <div className="team-text">
                                    <h2 className="text-2xl font-bold">Bridely</h2>

                                    <div className="card-actions justify-end mt-16">
                                        <p>see project</p>
                                        <FaChevronRight className='text-3xl' ></FaChevronRight >

                                    </div>
                                </div>
                            </div>
                        </div>


                    </a>



                </div>

                <div className='lg:mt-72'>
                    <a href="https://brand-shop-d10ed.web.app/">


                        <div className=" shadow-xl">
                            <div className="single-team">


                                <figure><img className='h-[250px] w-[250px] rounded-lg' src={img2} alt="Shoes" /></figure>
                                <div className="team-text">
                                    <h2 className="text-2xl font-bold">Car Shop</h2>

                                    <div className="card-actions justify-end mt-16">
                                        <p>see project</p>
                                        <FaChevronRight className='text-3xl'></FaChevronRight>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </a>

                </div>

            </div>

        </div>
    );
};

export default MyProject;