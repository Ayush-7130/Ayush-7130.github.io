import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.png";
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
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Frontend Developer"];
    const period = 1000;

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
                                    <div>
                                        <h2>{`Hi! I'm `} <h1>Ayush Kumar</h1> <span className="txt-rotate" dataPeriod="500" data-rotate='[ "Web Developer", "Web Designer"]'><span className="fixd wrap">{text}</span></span></h2>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <a href='#contact'>
                                        <button>Let’s Connect <ArrowRightCircle size={25} /></button>
                                    </a>
                                    <a href={CV} download className="btn btn-cv">Download CV</a>
                                </div>}
                        </TrackVisibility>
                    </div>

                    <div className='banner_column1'>
                        <div className="banner_img">
                            <img src={headerImg} alt="Header Img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
