import React from 'react';
import selfie from '../../images/IMG_1394.jpeg';
import './style.css';

import jsPNG from "../../images/JS.png";
import bootstrapPNG from '../../images/bootstrap.png';
import css3 from '../../images/css3.png';
import html5PNG from '../../images/html5.png';
import jQueryPNG from '../../images/jQuery.png';
import handlebarsPNG from '../../images/handlebars.png';
import MySqlPNG from '../../images/MySQL.jpeg';
import nodeJSPNG from '../../images/nodeJS.png';
import expressPNG from '../../images/express.png';
import npmPNG from '../../images/npm_logo.png';
import reactPNG from '../../images/React.png';
import sassPNG from '../../images/sass.png';
import github from '../../images/github-logo.png';
import mongodbPNG from '../../images/mongodb.png';
import mernPNG from '../../images/mern.jpeg';


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
                            <ul className='skillsPod'>
                                {/* <li>MongoDB</li>
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
                                <li>Git</li> */}
                                <img src={jsPNG} alt='javascript' title='javascript'/>
                                <img src={bootstrapPNG} alt="bootstrap" title="bootstrap"/>
                                <img src={html5PNG} alt="html" title="html"/>
                                <img src={css3} alt="css" title="css"/>
                                <img src={jQueryPNG} alt="jquery" title="jquery"/>
                                <img src={handlebarsPNG} alt="handlebars" title="handlebars"/>
                                <img src={MySqlPNG} alt="mysql" title="mysql"/>
                                <img src={nodeJSPNG} alt="nodejs" title="nodejs"/>
                                <img src={expressPNG} alt="express" title="express"/>
                                <img src={npmPNG} alt="npm" title="npm"/>
                                <img src={reactPNG} alt="react" title="react"/>
                                <img src={sassPNG} alt="sass" title="sass"/>
                                <img src={github} alt="github" title="github"/>
                                <img src={mongodbPNG} alt="mongodb" title="mongodb"/>
                                <img src={mernPNG} alt="mern" title="mern"/>
                            </ul>
                        </div>
                        <div className='aboutPod'>
                            <h3>Who am I?</h3>
                            <p>I'm a person who is perpetually trying to learn something new. In my free time I enjoy reading about and experimenting with new frameworks and technologies. I love the feeling I get when I finally find that bug that's been eluding me for the last few hours. Away from the computer, I enjoy working on my car, spending time outdoors, and training JiuJitsu. </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>)
}

export default Hero;
