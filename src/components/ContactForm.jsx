

import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Daxil edilən məlumatları konsolda göstər
    console.log('Ad:', name);
    console.log('Email:', email);
    console.log('Mesaj:', message);
  };

  return (
    <div style={{  margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#08101d', color: '#fff' }}>
      <h2 style={{ padding:'30px' , textAlign:'center'}}>Bizimlə Əlaqə <br />
        Contact
      </h2>
      {submitted ? (
        <div style={{ color: 'green', marginTop: '20px' }}>
         Təşəkkürlər! Feedbackinizi aldıq. <br />
         Thanks! We received your feedback.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '10px' }}>Name: <br /> Adnız: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: '20px'
            }}
          />

          <label htmlFor="email" style={{ display: 'block', marginBottom: '10px' }}>Email: <br /> Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: '20px'
            }}
          />

          <label htmlFor="message" style={{ display: 'block', marginBottom: '10px' }}>Massage: <br /> Mesajınız:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: '20px'
            }}
          />

          <button type="submit" style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: '#007BFF', color: 'white' }}>
            Göndər
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;