import React, { useEffect } from 'react'
import './project.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import P1_Back from '../../assets/img/textUtils.png';
import P2_Back from '../../assets/img/newsApp.png';
import P3_Back from '../../assets/img/portfolio_front.png';
import P4_Back from '../../assets/img/inotepad.png';

const Project = () => {
    useEffect(() => {
        AOS.init({ duration: 400 });
    }, []);

    return (
        <section id='project'>
            <h2>My Projects</h2>

            <div className='container project_container'>
                <div className='project_card' data-aos="fade-up">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={P4_Back} alt='TextUtils'></img>
                            <h3>iNotePad</h3>
                        </div>
                        <div class="flip-card-back">
                            <h1>iNotePad</h1>
                            <p>iNotePad is a note-taking web app where users can create accounts and take notes.</p>
                            <a href='https://github.com/Ayush-7130/iNotePad' target='_blank' rel="noopener noreferrer" className='btn-project'>GitHub</a>
                        </div>
                    </div>
                </div>

                <div className='project_card' data-aos="fade-up">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={P2_Back} alt='NewsApp'></img>
                            <h3>NewsApp</h3>
                        </div>
                        <div class="flip-card-back">
                            <h1>NewsApp</h1>
                            <p>Completely functional news updates app that fetches trending news from an API with React based Frontend Architecture.</p>
                            <a href='https://github.com/Ayush-7130/NewsApp' target='_blank' rel="noopener noreferrer" className='btn-project'>GitHub</a>
                        </div>
                    </div>
                </div>

                <div className='project_card' data-aos="fade-up">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={P1_Back} alt='TextUtils'></img>
                            <h3>TextUtils</h3>
                        </div>
                        <div class="flip-card-back">
                            <h1>TextUtils</h1>
                            <p>TextUtils is a collection of useful utilities for manipulating String objects.</p>
                            <a href='https://github.com/Ayush-7130/TextUtils' target='_blank' rel="noopener noreferrer" className='btn-project'>GitHub</a>
                        </div>
                    </div>
                </div>

                <div className='project_card' data-aos="fade-up">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={P3_Back} alt='Portfolio'></img>
                            <h3>Portfolio</h3>
                        </div>
                        <div class="flip-card-back">
                            <h1>Portfolio</h1>
                            <p>Crafted a sleek and modern personal portfolio using React, showcasing my skills and accomplishments with engaging design and effortless navigation.</p>
                        <a href='https://github.com/Ayush-7130/Ayush-7130.github.io' target='_blank' rel="noopener noreferrer" className='btn-project'>GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project