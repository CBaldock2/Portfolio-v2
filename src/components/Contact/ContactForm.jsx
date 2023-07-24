import React, {  } from "react";
import "./ContactForm.css";
// import emailjs from "emailjs";

function ContactForm() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');
    // const form = useRef();

    // const handleNameChange = (e) => {
    //     setName(e.target.value);
    // };
    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // };
    // const handleMessageChange = (e) => {
    //     setMessage(e.target.value);
    // };

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs
    //         .sendForm(
    //             'service_uxohnik',
    //             'template_5cv5f24',
    //             form.current,
    //             'c77soGEhYFY6vRD4D')
    //         .then(
    //             (result) => {
    //                 console.log(result.text);
    //                 setName('');
    //                 setEmail('');
    //                 setMessage('');
    //             },
    //             (error) => {
    //                 console.log(error.text);
    //             })
    // }

    return (
        <form class="form">
            <div>
                <div className="wordArea">
                <p>Name</p>
                <input type="text" class="input" />
            </div>
            <div>
                <p>Email</p>
                <input type="text" class="input" />
            </div>
            <div>
                <p>Message</p>
                <textarea className="message"></textarea>
            </div>
            </div>

            <button className="submit">Submit</button>
        </form>
    )
}

export default ContactForm;