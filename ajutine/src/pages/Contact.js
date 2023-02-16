// import React from 'react'

// function Contact() {
//   return (
//     <div>
//       <h1>
//       What's up?
//       </h1>
//       <br />
//       <p>
//         If you are interested in working or collabing with me then contact me using this form below.
//       </p>
      
//     </div>
//   )
// }

// export default Contact


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q42nkkn', 'template_r1iovxh', form.current, '8NezWIOGjcwY5-Lc4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (

    <div className="text-zone">
      <h1>
        What's up?
      </h1>
      <br />
      <p className="intro-sentence">
      If you are interested in working or collabing together then contact me using this form below.
      </p>
      <br />
      <div className="contact-form">
    <form ref={form} onSubmit={sendEmail}>
      <div className="form-box">
      <label>Name</label>
      <input type="text" name="from_name" />
      </div>
      <div className="form-box">
      <label>Email</label>
      <input type="email" name="from_email" />
      </div>
      <div className="form-box">
      <label>Message</label>
      <textarea name="message" />
      </div>
      <div className="form-box">
        <div className="send-box">
      <input className="send-button" type="submit" value="Send" />
      </div>
      </div>
    </form>
    </div>
    <div id="mapid"></div>

    </div>
    
  );
  }


export default Contact