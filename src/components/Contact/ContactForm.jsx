import React, { useState, useRef, useEffect } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageSent, setMessageSent] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const form = useRef();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_uxohnik',
                'template_5cv5f24',
                form.current,
                'c77soGEhYFY6vRD4D')
            .then(
                (result) => {
                    console.log(result.text);
                    setName('');
                    setEmail('');
                    setMessage('');
                    setMessageSent(true);
                },
                (error) => {
                    console.log(error.text);
                });
    };

    useEffect(() => {
        if (messageSent) {
            setShowNotification(true)

            const timer = setTimeout(() => {
                setShowNotification(false);
            }, 3000);

            return () => {
                clearTimeout(timer);
                setMessageSent(false);
            };
        };
    }, [messageSent]);

    return (
        <form className="form" ref={form} onSubmit={sendEmail}>
            <div>
                <div className="wordArea">
                    <p>Name</p>
                    <input type="text" className="input" name='name' value={name} onChange={handleNameChange} required />
                </div>
                <div>
                    <p>Email</p>
                    <input type="text" className="input" name='email' value={email} onChange={handleEmailChange} required />
                </div>
                <div>
                    <p>Message</p>
                    <textarea className="message" name='message' value={message} onChange={handleMessageChange} required />
                </div>
            </div>

            <button className="submit" onClick={sendEmail}>Submit</button>
            {showNotification && (
                <div className="notification">
                    <p>Your message has been sent! 👽</p>
                </div>
            )}
        </form>
    )
}

export default ContactForm;