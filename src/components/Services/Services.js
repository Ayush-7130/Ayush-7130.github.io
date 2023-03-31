import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import './services.css';

const Services = () => {
    return (
        <section id='services'>
            <h2>Roles I Wish to Work On</h2>

            <div className='container service_container'>
                <div className='service'>
                    <div className='service_head'>
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service_list'>
                        <li><AiOutlineCheck className='service_icon'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li><AiOutlineCheck className='service_icon'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li><AiOutlineCheck className='service_icon'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li><AiOutlineCheck className='service_icon'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li><AiOutlineCheck className='service_icon'/> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    </ul>
                </div>

                <div className='service'>
                    <div className='service_head'>
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service_list'>
                        <li><AiOutlineCheck className='service_icon' /> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li><AiOutlineCheck className='service_icon' /> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li><AiOutlineCheck className='service_icon' /> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li><AiOutlineCheck className='service_icon' /> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        <li><AiOutlineCheck className='service_icon' /> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Services