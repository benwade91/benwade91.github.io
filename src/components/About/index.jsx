import React from 'react';
import selfie from '../../images/IMG_1394.jpeg';
import './style.css';


const Hero = () => {
    return (
        <div className='hero'>
            <div className="content">
                <div className="ben-pic title">
                    <img className="" src={selfie} alt="A beautiful persons face." />
                </div>
                <div className="words">
                    <div className='aboutSection'>
                        <div className='aboutPod'>
                            <h3>About Me</h3>
                            <p>My name is Ben and I'm a full stack web developer living in the San Francisco Bay Area. I enjoy building quality web apps, big and small. I'm passionate about producing work with great UI/UX and mobile responsiveness. If you are a small business looking for a website, or a business looking to hire, please reach out!</p>
                        </div>
                        <div className='aboutPod'>
                            <h3>Skills</h3>
                            <img src="images/html5.png" alt=""/>
                            <ul>
                                <li>MongoDB</li>
                                <li>Express</li>
                                <li>React </li>
                                <li>Node</li>
                                <li>JavaScipt</li>
                                <li>CSS/SASS</li>
                                <li>GraphQL</li>
                                <li>Webpack</li>
                                <li>JQuery</li>
                                <li>Bootstrap</li>
                                <li>Handlebars</li>
                                <li>MySQL </li>
                                <li>Git</li>

                            </ul>
                        </div>
                        <div className='aboutPod'>
                            <h3>Who am I?</h3>
                            <p>I'm a person who is perpetually trying to learn something new. In my free time I enjoy reading about and experimenting with new frameworks and technologies. I love the feeling I get when i finally find that bug that's been eluding me for the last few hours. Away from the computer, I enjoy working on my car, spending time outdoors, and training JiuJitsu. </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>)
}

export default Hero;