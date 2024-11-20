import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "SEO and Digital Marketing",
    image: "https://images.pexels.com/photos/19319639/pexels-photo-19319639/free-photo-of-boston-dynamics-robot-in-a-car-factory.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Increase online visibility with search engine optimization and online marketing strategies. Benefit for Clients: Attract more organic traffic to the website and boost lead generation or online sales.",
  },
  {
    title: "E-commerce Development",
    image: "https://media.istockphoto.com/id/1515913422/photo/a-data-analyst-using-technology-ai-for-working-tool-for-data-analysis-chatbot-chat-with-ai.jpg?s=1024x1024&w=is&k=20&c=1Gp42CNED2rctVjUgHazI_2YmauuP0zb6RYuGRacwaY=",
    description: "What We Offer: Building and optimizing e-commerce platforms (Shopify, WooCommerce, etc.). Benefit for Clients: Increase sales by creating a user-friendly, reliable, and appealing online store.",
  },
  {
    title: "Mobile App Development",
    image: "https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "What We Offer: Developing custom mobile applications for client products or services. Benefit for Clients: Reach a wider audience by providing products and services conveniently on mobile platforms.",
  },
];

function Services() {
  return (
    <section style={styles.servicesSection}>
      <h2 style={styles.sectionTitle}>Services</h2>
      <div style={styles.cardContainer}>
        {services.map((service, index) => (
          <Link to={service.path} key={index} style={styles.cardLink}>
            <div style={styles.card}>
              <img src={service.image} alt={service.title} style={styles.cardImage} />
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{service.title}</h3>
                <p style={styles.cardDescription}>{service.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

const styles = {
  servicesSection: {
    padding: '20px',
    backgroundColor: '#020a18',
    color: '#000',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '20px',
  },
  cardContainer: {
    display: 'flex',
    gap: '40px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cardLink: {
    textDecoration: 'none',
    color: '#fff',
    maxWidth: '250px',
  },
  card: {
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0, 0.1)',
    transition: 'transform 0.5s',
    cursor: 'pointer',
  },
  cardImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '15px',
    backgroundColor: '#08101d',
  },
  cardTitle: {
    fontSize: '1.1em',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cardDescription: {
    fontSize: '0.9em',
    color: '#fff',
  },
};

export default Services;
