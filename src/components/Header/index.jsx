import React from 'react';
import { Link } from "react-router-dom";
import './style.css'
import './CSS/styles.css';

const Header = () => {
    let categories = [
        { name: 'About Me', route: '/' },
        { name: 'Projects', route: '/projects' },
        { name: 'Contact', route: '/contact' },
        { name: 'Resume', route: '/resume' }
    ];

    return (
        <header>
            <h1> Ben Wade</h1>
            <nav className='lg-nav'>
                <ul>
                    {categories.map((category) => {
                        return <li className="menu-item nav-btn" key={category.name + '1'}>
                            <Link style={{ 'textDecoration': 'none' }} to={category.route}>
                                <span style={{ cursor: 'pointer' }} className="menu-item"
                                >{category.name}</span>
                            </Link>
                        </li>
                    })}
                </ul>
            </nav>
            <nav className='sm-nav'>
                <div className="navbar">
                    <div className="dropdown">
                        <button className="dropbtn">Menu
      <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            {categories.map((category) => {
                                return (
                                    <Link key={category.name} style={{ 'textDecoration': 'none' }} to={category.route}>
                                        <span style={{ cursor: 'pointer' }} className="menu-item"
                                        >{category.name}<br /></span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;