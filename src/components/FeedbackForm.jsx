import React, { useState } from 'react';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can send feedback to the backend or process it here
    console.log('Feedback:', feedback);
  };

  return (
    <div
      style={{
        margin: 'auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#08101d',
        color: '#fff',
      }}
    >
      <h3 style={{ paddingBottom: '35px', textAlign: 'center' }}>
        Share your thoughts on Artificial Intelligence
      </h3>

      {submitted ? (
        <div style={{ color: 'green', marginTop: '20px', textAlign: 'center' }}>
          Thank you! We received your feedback.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="feedback"
            style={{
              display: 'block',
              marginBottom: '10px',
              fontWeight: 'bold',
            }}
          >
            Your thoughts on Artificial Intelligence:
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows="4"
            style={{
              width: '35%', // Text area width is set to 35%
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: '5px', // Added spacing below this field
              resize: 'vertical', // Allows users to vertically resize the text area
            }}
          />
          {/* Button positioned below the textarea */}
          <div>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#007BFF',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default FeedbackForm;
