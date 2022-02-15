import React, { useState } from 'react'
import * as emailjs  from 'emailjs-com'
import '../style/contact.css'
import {SiDiscord, SiTwitter} from 'react-icons/si'

const Talk = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (email && message) {
            const serviceId = "service_53ldd8k";
            const templateId = "template_x3trk8c";
            const userId = "user_dxCGbZyexuWmxjv98Z5V3";
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
        <div className="main-talk">
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
                        </ul>
                    </div>
        </div>

        <footer className="footer">
                <div>
                 <h1 className='p1-footer'>Tomas Millan</h1>
                <p className='p2-footer'>Programador fullstack</p>
               </div>
           </footer>
        </>
    );
};

export default Talk;