
import { FaChevronRight } from "react-icons/fa";

import img1 from '../../assets/banner.png'
import img2 from '../../assets/apartment.png'
import img3 from '../../assets/perpect.png'
import img4 from '../../assets/mission.png'
import img5 from '../../assets/blog.png'
import img6 from '../../assets/agree.png'
import img7 from '../../assets/event-banner.png'
import img8 from '../../assets/dream.png'
import img9 from '../../assets/event.png'
import img10 from '../../assets/team.png'
import img11 from '../../assets/contact.png'
import img12 from '../../assets/product.png'
import img13 from '../../assets/what.png'
import img14 from '../../assets/car.png'
import img15 from '../../assets/car-banner.png'
import img16 from '../../assets/test.png'
import img17 from '../../assets/loan.png'
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
        <div className='mx-6 lg:mx-12' id='project'>
            <p className="text-indigo-500 text-center">VISIT MY PROJECTS AND KEEP YOUR FEEDBACK</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-center">MY PROJECTS</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 justify-center items-center'>

                <div>
                    <div className="shadow-xl p-8">
                        <div className="single-team">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide><img className=' h-80' src={img1} alt="" /></SwiperSlide>
                                <SwiperSlide><img className=' h-80' src={img2} alt="" /></SwiperSlide>
                                <SwiperSlide><img className=' h-80' src={img3} alt="" /></SwiperSlide>
                                <SwiperSlide><img className=' h-80' src={img4} alt="" /></SwiperSlide>
                                <SwiperSlide><img className=' h-80' src={img5} alt="" /></SwiperSlide>
                                <SwiperSlide><img className=' h-80' src={img6} alt="" /></SwiperSlide>

                            </Swiper>

                            <div className=" flex justify-between ">
                                <a href="https://remarkable-babka-8ef47b.netlify.app/">
                                    <div className="card-actions  mt-16 flex items-center transition-transform transform hover:scale-110 transition-delay-300">
                                        <p>see project</p>
                                        <FaChevronRight className='text-xl'></FaChevronRight>
                                    </div>
                                </a>

                                <a href="https://github.com/aminul157246/apartment-booking-client">
                                    <div className="card-actions  mt-16 flex items-center transition-transform transform hover:scale-110 transition-delay-300">
                                        <p>Github</p>
                                        <FaChevronRight className='text-xl'></FaChevronRight>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>







                <div>
                    <div className="shadow-xl p-8">
                        <div className="single-team">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide><img className=' h-80' src={img7} alt="" /></SwiperSlide>
                                <SwiperSlide><img className=' h-80' src={img8} alt="" /></SwiperSlide>
                                <SwiperSlide><img className=' h-80' src={img9} alt="" /></SwiperSlide>
                                <SwiperSlide><img className=' h-80' src={img10} alt="" /></SwiperSlide>
                                <SwiperSlide><img className=' h-80' src={img11} alt="" /></SwiperSlide>
                                <SwiperSlide><img className=' h-80' src={img12} alt="" /></SwiperSlide>
                                <SwiperSlide><img className=' h-80' src={img13} alt="" /></SwiperSlide>

                            </Swiper>

                            <div className=" flex justify-between ">
                                <a href="https://elegant-marzipan-f0ca7b.netlify.app/ ">
                                    <div className="card-actions  mt-16 flex items-center transition-transform transform hover:scale-110 transition-delay-300">
                                        <p>see project</p>
                                        <FaChevronRight className='text-xl'></FaChevronRight>
                                    </div>
                                </a>

                                <a href="https://github.com/aminul157246/event-management">
                                    <div className="card-actions  mt-16 flex items-center transition-transform transform hover:scale-110 transition-delay-300">
                                        <p>Github</p>
                                        <FaChevronRight className='text-xl'></FaChevronRight>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>






                <div>
                    <div className="shadow-xl p-8">
                        <div className="single-team">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide><img className=' h-80' src={img14} alt="" /></SwiperSlide>
                                <SwiperSlide><img className=' h-80' src={img15} alt="" /></SwiperSlide>
                                <SwiperSlide><img className=' h-80' src={img16} alt="" /></SwiperSlide>
                                <SwiperSlide><img className=' h-80' src={img17} alt="" /></SwiperSlide>

                            </Swiper>

                            <div className=" flex justify-between ">
                                <a href="https://brand-shop-d10ed.web.app/">
                                    <div className="card-actions  mt-16 flex items-center transition-transform transform hover:scale-110 transition-delay-300">
                                        <p>see project</p>
                                        <FaChevronRight className='text-xl'></FaChevronRight>
                                    </div>
                                </a>

                                <a href="https://github.com/aminul157246/brandshop-client">
                                    <div className="card-actions  mt-16 flex items-center transition-transform transform hover:scale-110 transition-delay-300">
                                        <p>Github</p>
                                        <FaChevronRight className='text-xl'></FaChevronRight>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProject;