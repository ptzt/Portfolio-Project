import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import '../style/contact.css'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = process.env.REACT_APP_SERVICE_ID;
            const templateId = process.env.REACT_APP_TEMPLATE_ID;
            const userId = process.env.REACT_APP_USER_ID;
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Por favor rellene todos los campos');
        }
    }
    return (
        <>
        

        <div id="contact-form">
        <div className="main">Vamos a hablar!💬
        <p className="p4">Puedes mandarme un mensaje</p>
        </div>
            <input type="text" placeholder="Tu nombre" value={name} onChange={e => setName(e.target.value)} />
            <input type="email" placeholder="Tu email" value={email} onChange={e => setEmail(e.target.value)}/>
            <textarea placeholder="Tu mensaje" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button onClick={submit}>Enviar mensaje</button>
            <span className={emailSent ? 'visible' : null}>Gracias por tu mensaje, me pondre en contacto contigo en un abrir y cerrar de ojos!</span>
        </div>
            
        </>
    );
};

export default Contact;