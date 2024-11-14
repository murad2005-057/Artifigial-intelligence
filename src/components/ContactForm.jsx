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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px', fontFamily: 'Arial, sans-serif', backgroundColor: '#020a18', color: '#fff' }}>
      <div style={{ width: '70%', display: 'flex', backgroundColor: '#08101d', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
        
        {/* Sol tərəf: Forma sahələri */}
        <div style={{ flex: 1, padding: '40px' }}>
          <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: '20px' }}>
            Bizimlə Əlaqə 
          </h2>

          {submitted ? (
            <div style={{ color: 'green', marginTop: '20px', textAlign: 'center' }}>
              Təşəkkürlər! Feedbackinizi aldıq. <br />
              Thanks! We received your feedback.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '10px' }}>
                Adınız və Soyadınız:
              </label>
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

              <label htmlFor="email" style={{ display: 'block', marginBottom: '10px' }}>
                Mail adresiniz:
              </label>
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

              <label htmlFor="message" style={{ display: 'block', marginBottom: '10px' }}>
                Əlavə qeyd:
              </label>
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

              <div style={{ textAlign: 'center' }}>
                <button type="submit" style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: '#ff007b', color: 'white', fontWeight: 'bold' }}>
                  Göndər
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Sağ tərəf: Xəritə şəkli */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
          <img 
            src="https://yeniemlak.az/get-img/11102024W6403121.jfif" 
            alt="Xəritə - Af Buisness House" 
            style={{ maxWidth: '70%', borderRadius: '8px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
