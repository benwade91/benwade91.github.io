import React from 'react';
import './style.css';

import simpleSuds from "../../images/SimpleSuds.png";
import iCycle from "../../images/icycle.png";
import employeeManager from "../../images/employeemngr.png";
import weatherDash from "../../images/weather.png";
import blogger from '../../images/blog.png';
// import noteTaker from "../../images/notetaker.png";


import jsPNG from "../../images/JS.png";
import bootstrapPNG from '../../images/bootstrap.png';
import css3 from '../../images/css3.png';
import html5PNG from '../../images/html5.png';
import jQueryPNG from '../../images/jQuery.png';
import handlebarsPNG from '../../images/handlebars.png';
import MySqlPNG from '../../images/MySQL.jpeg';
import nodeJSPNG from '../../images/nodeJS.png';
import expressPNG from '../../images/express.png';
// import npmPNG from '../../images/npm_logo.png';
// import reactPNG from '../../images/React.png';
// import sassPNG from '../../images/sass.png';
// import github from '../../images/github-logo.png';
// import mongodbPNG from '../../images/mongodb.png';
// import mernPNG from '../../images/mern.jpeg';

const projects = [
    {
        name: 'SimpleSuds',
        description: 'SimpleSuds connects customers to local laundromats that will pick up and return laundry clean, ironed, and folded. Customer can create accounts and place orders and Laudromat as admin can update the order.',
        photoSrc: simpleSuds,
        url: 'https://simple-suds.herokuapp.com/',
        repo: 'https://github.com/bhumisha/laundromat',
        role: 'This was a group project using MVC. My role was the frontend development. I used handlebars.JS to template the HTML and combined it with Bootstrap and vanilla CSS.',
        technologies: [handlebarsPNG, jQueryPNG, bootstrapPNG, css3]
    },
    {
        name: 'iCycle',
        description: 'With iCycle, a user can search for a city or zip code and find out how many bicycle-related thefts, accidents, and potential road hazards have been reported within a 10-mile radius of that searched area.',
        photoSrc: iCycle,
        url: 'https://ohwhytina.github.io/iCycle/',
        repo: 'https://github.com/ohwhytina/iCycle',
        role: 'This was a group project where my role was to build the API functionality. I combined the GoogleMaps API with geographic locations of "incidents" from the Bikewise API.',
        technologies: [html5PNG, jsPNG, jQueryPNG, css3]
    },
    {
        name: 'Blogger',
        description: `Blogger is a simple app used to make blog posts. Users can sign-up with their email and a username to begin. Users can create, edit and delete their posts, as well as comment on other user's blog posts.`,
        photoSrc: blogger,
        url: 'https://bens-blogger.herokuapp.com/',
        repo: 'https://github.com/benwade91/Blogger',
        technologies: [nodeJSPNG, expressPNG, handlebarsPNG, jsPNG]
    },
    {
        name: 'Weather Dash',
        description: 'This app is used to fetch weather information from the openweathermap.org API and display said information on the home page. The app uses the "One Call API" and the "5 Day/ 3 Hour Forecast" APIs to gather the data needed. The dashboard also uses the local storage to store previous searches and display them for later calls.',
        photoSrc: weatherDash,
        url: 'https://benwade91.github.io/Weather-Dashboard/',
        repo: 'https://github.com/benwade91/Weather-Dashboard',
        technologies: [html5PNG, jsPNG, css3]
    },
    {
        name: 'Employee Manager',
        description: 'This app is built to be an employee management system. The app leverages a MySQL database to store and keep trach of a work force, while also customizable. While using the app, you can create and remove employees, create job roles, and departments, look up employees by manager and more.',
        photoSrc: employeeManager,
        repo: 'https://github.com/benwade91/Employee-Manager',
        technologies: [MySqlPNG, nodeJSPNG, jsPNG]
    }
]

const Project = () => {
    return (<main className='projects'>
        <div className='parent'>
            {projects.map(project => (
                <section key={project.name} className='content'>
                    <div className='title projectTitle'>
                        <h3>{project.name}</h3>
                        <div>
                        {project.technologies.map(techIMG => {
                            console.log('mmmmmm');
                            return <img className='techPNG' src={techIMG} alt='technology png'/>
                        })}
                        </div>
                    </div>
                    <div className="flip-card projectCrd">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={project.photoSrc} alt="Avatar" />
                            </div>
                            <div className="flip-card-back">
                                <p>{project.description}</p>
                                <div>
                                    {(project.url) && <a href={project.url}>Deployed App</a>}
                                </div>
                                <div>
                                    <a href={project.repo}>Github Repo</a>
                                </div>
                                {project.role && <p>{project.role}</p>}
                            </div>
                        </div>
                    </div>
                </section>
            ))}

        </div>
    </main>)
}


export default Project;