import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mq6ssq2', 'template_f111ky8', form.current, 'wydV_a_tiPQDLbw8g')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    return (
        <section id='contact'>
            <h2>Contact Me</h2>

            <div className='contact_container'>
                <div className='contact_options'>
                    <div className='contact_option'>
                        <AiOutlineMail className='contact_icon' />
                        <h4>Email</h4>
                        <h5>Ayushkr7130@gmail.com</h5>
                        <a href='mailto:Ayushkr7130@gmail.com'>Send Message</a>
                    </div>

                    <div className='contact_option'>
                        <AiOutlineLinkedin className='contact_icon' />
                        <h4>linkedIn</h4>
                        <h5>Ayush Kumar</h5>
                        <a href="https://www.linkedin.com/in/ayush--kumar--/">Send Message</a>
                    </div>

                    <div className='contact_option'>
                        <AiOutlineWhatsApp className='contact_icon' />
                        <h4>Whatsapp</h4>
                        <h5>+91 8875231058</h5>
                        <a href='https://wa.me/918875231058'>Send Message</a>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <h3>Send me a Mail</h3>
                    <input type="text" name='name' className='contact_textarea' placeholder='Enter Your Name' required></input>
                    <input type="email" name='email' className='contact_textarea' placeholder='Enter Your Email' required></input>
                    <textarea type="message" name='message' className='contact_textarea' rows={7} placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn_submit'>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact