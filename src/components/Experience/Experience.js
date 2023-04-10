import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = () => { 
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Skills</h2>

            <div className='container experience_container'>
                <div className='experience_card'>
                    <h3> Tech Stack </h3>
                    <div className='experience_content'>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>C++</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>C</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>Python</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>Javascript</h5>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='experience_card'>
                    <h3> CS Core </h3>
                    <div className='experience_content'>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>DBMS</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>Operating System</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>Computer Network</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>{`OOPS (C++)`}</h5>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='experience_card'>
                    <h3> Frontend Development </h3>
                    <div className='experience_content'>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>React.js</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>HTML5</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>CSS3</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>Tailwind CSS</h5>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='experience_card'>
                    <h3> Backend Development </h3>
                    <div className='experience_content'>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>Node.js</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>Express.js</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>MongoDB</h5>
                            </div>
                        </article>
                        <article className='experience_details'><BsFillPatchCheckFill className='experience_icon' />
                            <div>
                                <h5>MySQL</h5>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience