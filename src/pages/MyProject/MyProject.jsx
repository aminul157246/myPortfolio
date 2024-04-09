import img1 from '../../assets/home.png'
import img2 from '../../assets/22project.png'
import img3 from '../../assets/bridly.png'
import { FaChevronRight } from "react-icons/fa";
// import './MyProject.css'


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MyProject = () => {
    return (
        <div className='' id='project'>
            <p className="text-indigo-500 text-center">VISIT MY PROJECTS AND KEEP YOUR FEEDBACK</p>
            <h2 className="text-5xl font-bold text-center">MY PROJECTS</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 justify-center items-center'>

                <div>
                    



                        <div className="shadow-xl p-8">
                            <div className="single-team">

                                {/* <figure><img className=" rounded-lg" src={img1} alt="Shoes" /></figure> */}

                                <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className=' h-80'  src={img1} alt=""/></SwiperSlide>
      <SwiperSlide><img className=' h-80' src={img1} alt=""/>2</SwiperSlide>
      <SwiperSlide><img className=' h-80' src={img1} alt=""/>3</SwiperSlide>
      <SwiperSlide><img className=' h-80' src={img1} alt=""/>4</SwiperSlide>
      ...
    </Swiper>






                                <div className=" flex justify-between ">
                                    <a href="https://remarkable-babka-8ef47b.netlify.app/">
                                    <div className="card-actions  mt-16 flex items-center">
                                        <p>see project</p>
                                        <FaChevronRight className='text-xl'></FaChevronRight>
                                    </div>
                                    </a>

                                    <a href="https://remarkable-babka-8ef47b.netlify.app/">
                                    <div className="card-actions  mt-16 flex items-center">
                                        <p>Github</p>
                                        <FaChevronRight className='text-xl'></FaChevronRight>
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                  

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