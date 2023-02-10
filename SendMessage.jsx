import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Link} from 'react-router-dom';



export const ContactUs = () => {


        <h2>What's up</h2>

        const form = useRef();
        
        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_z34pnfb', 'template_p09fdea', form.current, 'Ipp1rx0neuxgqYXdD')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
            }, (error) => {
                console.log(error.text);
            });
        };

        return (
            <>
             <div className='p-3 mb-2 bg-dark text-white'>
            <h1 className='logo'>Wooden Delight</h1>
            <button className='btn btn-outline-success'><Link to={`/products`}>Back to Customer View</Link></button>
            <button className='btn btn-outline-success'><Link to={`/chat`}>ChatBot</Link></button>
        </div>
            <h1>We love feedback!</h1>
            <h1>Please let us know how we can improve</h1>

            <form ref={form} onSubmit={sendEmail} className="position-absolute top-50 start-50 translate-middle w-25 p-5 bg-dark text-white">
                <label className='form-label'>Name</label>
                <input className='form-control' type="text" name="user_name" />
                <label className='form-label'>Email</label>
                <input className='form-control' type="email" name="user_email" />
                <label className='form-label'>Message</label>
                <textarea className='form-control' name="message" />
                <input type="submit" className='btn btn-primary' value="Send" />
            </form>
            </>
        );
}



export default ContactUs;