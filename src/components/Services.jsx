import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { title: "SEO və Rəqəmsal Marketinq", image: "https://images.pexels.com/photos/19319639/pexels-photo-19319639/free-photo-of-boston-dynamics-robot-in-a-car-factory.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", description: "Axtarış motoru optimizasiyası və onlayn marketinq strategiyaları ilə onlayn görünürlüğü artırmaq.Müştərilərə Faydası: Veb saytına daha çox orqanik trafik cəlb etmək və lider yaradıcılığı və ya onlayn satışları artırmaq.",  },
  { title: "E-ticarət İnkişafı", image: "https://media.istockphoto.com/id/1515913422/photo/a-data-analyst-using-technology-ai-for-working-tool-for-data-analysis-chatbot-chat-with-ai.jpg?s=1024x1024&w=is&k=20&c=1Gp42CNED2rctVjUgHazI_2YmauuP0zb6RYuGRacwaY=", description: "Nə Təklif Edirsiniz: E-ticarət platformalarının (Shopify, WooCommerce və s.) qurulması və optimallaşdırılması.Müştərilərə Faydası: İstifadəçi dostu, etibarlı və cəlbedici bir onlayn mağaza yaradaraq satışları artırmaq.",  },
  { title: "Mobil Tətbiq İnkişafı", image: "https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", description: "Nə Təklif Edirsiniz: Müştəri məhsulları və ya xidmətləri üçün xüsusi mobil tətbiqlərin hazırlanması.Müştərilərə Faydası: Müştəriyə mobil platformada rahatlıqla xidmət və məhsul təqdim edərək daha geniş auditoriyaya çatmaq.",  }
];

function Services() {
  return (
    <section style={styles.servicesSection}>
      <h2 style={styles.sectionTitle}>Xidmətlər</h2>
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
   color:'#000',
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
  }
};

export default Services;
