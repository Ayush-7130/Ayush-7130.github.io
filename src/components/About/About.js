import React from 'react';
import './about.css';
import { FiAward } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About</h2>

            <div className='container about_container'>
                <div className='about_content'>
                    <div className='about_box'>
                        <div className='about_card'>
                            <article className='about_card-icon'><FiAward />
                                <h5>Experience</h5>
                                <small>ajgcucduudsvsudy</small>
                            </article>
                        </div>
                        <div className='about_card'>
                            <article className='about_card-icon'><FiUsers />
                                <h5>Clients</h5>
                                <small>Clients</small>
                            </article>
                        </div>
                        <div className='about_card'>
                            <article className='about_card-icon'><VscFolderLibrary />
                                <h5>Projects</h5>
                                <small>completed projects</small>
                            </article>
                        </div>
                    </div>
                    <p>
                        ashavadbcjhsudaj
                    </p>
                </div>
            </div>

        </section>
    )
}

export default About