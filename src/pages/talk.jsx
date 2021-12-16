import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import '../style/contact.css'
import {SiDiscord, SiTwitter} from 'react-icons/si'
require('dotenv').config()

const Talk = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (email && message) {
            const serviceId = process.env.REACT_APP_SERVICE_ID;
            const templateId = process.env.REACT_APP_TEMPLATE_ID;
            const userId = process.env.REACT_APP_USER_ID;
            const templateParams = {
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Por favor rellene todos los campos');
        }
    }
    return (
        <>
        <div>
        <p className="p1-talk">Vamos a hablar!💬</p>
        <p className="p2-talk">Dejame un mensaje en el formulario a continuación o póngase en contacto a través de Discord o Twitter.</p>
           
        <div className= "main-box" id="contact-form">
            <label for email className="text">EMAIL</label>
            <input type="email"  value={email} onChange={e => setEmail(e.target.value)}/>
            <label for message className="text">TU MENSAJE</label>
            <textarea value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button onClick={submit}>Enviar</button>
            <div className='text-ok'><span className={emailSent ? 'visible' : null }>Gracias por tu mensaje, me pondre en contacto contigo en un abrir y cerrar de ojos!</span></div>
        </div>
            <div className="social">
                        <ul>
                            <h3><SiDiscord size={25}/> ptzt#0436</h3>
                            <h3><SiTwitter size={25}/> tomasptzt</h3>
                        </ul>
                    </div>
        </div>
        </>
    );
};

export default Talk;