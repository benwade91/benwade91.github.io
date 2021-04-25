import React, { useState } from 'react';
import './style.css';

let Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage(`What's up with the email?`);
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Please leave me a ${e.target.name}!`);
            } else {
                setErrorMessage('');
            }
        }
    };

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <section id="contact-me" className="content">
            <div className="title">
                <h3>Contact Me</h3>
            </div>
            <div className="words">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label><br/>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label><br/>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label><br/>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button data-testid="button" type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}


export default Contact;