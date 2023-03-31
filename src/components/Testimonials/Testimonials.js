import React from 'react';
import './testimonials.css';

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    return (
        <section id='testimonial'>
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>
            <Swiper
            modules={Pagination}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
                <div className='container testimonial_container'>
                    <SwiperSlide>
                        <div className='testimonial_item'>
                            <div className='client-logo'>
                                <h2>Google</h2>
                            </div>
                            <h5 className='client_name'>
                                Google
                            </h5>
                            <small className='client_review'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </small>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='testimonial_item'>
                            <div className='client-logo'>
                                <h2>Microsoft</h2>
                            </div>
                            <h5 className='client_name'>
                                Microsoft
                            </h5>
                            <small className='client_review'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </small>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='testimonial_item'>
                            <div className='client-logo'>
                                <h2>FB</h2>
                            </div>
                            <h5 className='client_name'>
                                Fackbook
                            </h5>
                            <small className='client_review'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </small>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </section>
    )
}

export default Testimonials