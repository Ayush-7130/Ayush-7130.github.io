import React from 'react'
import './project.css'

const Project = () => {
    return (
        <section id='project'>
            <h5>My Recent Work</h5>
            <h2>My Projects</h2>

            <div className='container project_container'>
                <div className='project_card'>
                    <div className='project_img'>

                    </div>
                    <h3>TextUtils</h3>
                    <a href='https://github.com/Ayush-7130/TextUtils' className='btn-project'>GitHub</a>
                </div>

                <div className='project_card'>
                    <div className='project_img'>
                        
                    </div>
                    <h3>Portfolio</h3>
                    <a href='https://github.com/Ayush-7130/Ayush-7130.github.io' className='btn-project'>GitHub</a>
                </div>

                <div className='project_card'>
                    <div className='project_img'>

                    </div>
                    <h3>PROJECT TITLE</h3>
                    <a href='link' className='btn-project'>GitHub</a>
                </div>
            </div>
        </section>
    )
}

export default Project