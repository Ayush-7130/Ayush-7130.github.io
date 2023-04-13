import React, {useEffect} from 'react'
import './project.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import P1_Back from '../../assets/img/textUtils.png';
import P2_Back from '../../assets/img/newsApp.png';
import P3_Back from '../../assets/img/portfolio_front.png';

const Project = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

    return (
        <section id='project'>
            <h5>My Recent Work</h5>
            <h2>My Projects</h2>

            <div className='container project_container'>
                <div className='project_card' data-aos="fade-up">
                    <div className='project_img'>
                        <img src={P1_Back} alt='TextUtils'></img>
                        <div className='img_card_body'>
                            <p>This is a notebook application that has inbuilt login logout, user authentication feature and cloud-based file storage.</p>
                        </div>
                    </div>
                    <h3>TextUtils</h3>
                    <a href='https://github.com/Ayush-7130/TextUtils' className='btn-project'>GitHub</a>
                </div>

                <div className='project_card' data-aos="fade-up">
                    <div className='project_img'>
                        <img src={P2_Back} alt='NewsApp'></img>
                        <div className='img_card_body'>
                            <p>Completely functional news updates app that fetches trending news from an API with React based Frontend Architecture.</p>
                        </div>
                    </div>
                    <h3>NewsApp</h3>
                    <a href='link' className='btn-project'>GitHub</a>
                </div>

                <div className='project_card' data-aos="fade-up">
                    <div className='project_img'>
                        <img src={P3_Back} alt='Portfolio'></img>
                        <div className='img_card_body'>
                            <p>This is a notebook application that has inbuilt login logout, user authentication feature and cloud-based file storage.</p>
                        </div>
                    </div>
                    <h3>Portfolio</h3>
                    <a href='https://github.com/Ayush-7130/Ayush-7130.github.io' className='btn-project'>GitHub</a>
                </div>
            </div>
        </section>
    )
}

export default Project