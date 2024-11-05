import React, { useState } from 'react';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Burada feedback-i backend-ə göndərə və ya emal edə bilərsiniz
    console.log('Feedback:', feedback);
  };

  return (
    <div style={{
      margin: 'auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#08101d',
      color: '#fff',
    
    }}>
      <h3 style={{ paddingBottom: '35px', textAlign: 'center' }}>
        Share your thoughts on Artificial Intelligence <br />
        Süni intellekt haqqında fikirlərinizi bildirin
      </h3>
      
      {submitted ? (
        <div style={{ color: 'green', marginTop: '20px', textAlign: 'center' }}>
          Təşəkkürlər! Feedbackinizi aldıq. <br />
          Thanks! We received your feedback.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="feedback" style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
            Süni intellekt haqqında fikirləriniz: <br />
            Your thoughts on Artificial Intelligence:
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows="4"
            style={{
              width: '35%', // Mətn sahəsinin eni 35% olaraq təyin edildi
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: '5px', // Bu sahənin altına məsafə əlavə edildi
              resize: 'vertical' // İstifadəçinin mətn sahəsini dikey olaraq genişləndirməsinə icazə verir
            }}
          />
          {/* Düyməni textarea-nın altında yerləşdiririk */}
          <div>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#007BFF',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              Göndər
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default FeedbackForm;
