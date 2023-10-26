import React from 'react';
import { useState, useEffect } from "react";
// import headerImg from "../../assets/img/header-img.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import CV from '../../assets/CV/Resume.pdf'
import 'animate.css';
import './Banner.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    // eslint-disable-next-line
    const [index, setIndex] = useState(1);
    const toRotate = ["Software Developer", "Full Stack Web Dev"];
    const period = 400;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <div className="banner_container" >
                <div className="banner_row">
                    <div className='banner_column'>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <div className='Banner-h1'>
                                        <h2>{`Hi! I'm `} <h1>Ayush Kumar</h1> <span className="txt-rotate" dataPeriod="400" data-rotate='["Software Developer", "Full Stack Web Dev"]'><span className="fixd wrap">{text}</span></span></h2>
                                    </div>
                                    <p>Passionate about software development, project-based experience in full stack web development with strain over MERN stack. Primarily looking for his SDE and full stack developer internship position for summer 2024. I wish to employ my skills efficiently to become an asset to my employer while gaining true experience in real-time development.</p>
                                    <a href={CV} download>
                                        <button>Download CV <ArrowRightCircle size={25} /></button>
                                    </a>
                                </div>}
                        </TrackVisibility>
                    </div>

                    {/* <div className='banner_column1'>
                        <div className="banner_img">
                            <img src={headerImg} alt="Header Img" />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
