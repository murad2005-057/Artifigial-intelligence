import React from 'react';

const blogPosts = [
  { title: "Süni İntellekt Nədir?", image: "https://media.istockphoto.com/id/1628553826/photo/ai-or-artificial-intelligence-concept-businessman-using-computer-use-ai-to-help-business-and.jpg?s=612x612&w=0&k=20&c=Ii4XvGWruTsPHcFBofrHRGUHTA4lI-Oe06V4Q_gBeQY=", description: "Süni intellektin əsas tərifi və tarix Süni intellektin növləri , Dar süni intellekt ümumi süni intellekt və super süni intellekt arasındakı fərqlər Süni intellektin inkişafı və ilk uğurlu tətbiqləri" },
  { title: "Süni İntellekt və Gələcək", image: "https://media.istockphoto.com/id/1979289147/photo/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer.jpg?s=2048x2048&w=is&k=20&c=CnYhOjeTPisYsN-OLYVp60ZNKK3jP3JCPZrCjxCqmto=", description: "Süni intellekt, robotlar və insanlar arasındakı qarşılıqlı əlaqə Süni intellektin sağlamlıq sahəsində inqilab yaratması İnsanlar və süni intellekt arasında əməkdaşlıq və məsuliyyətlər" },
  { title: "Süni İntellekt və İnsan Əlaqəsi", image: "https://media.istockphoto.com/id/1435014643/photo/ai-machine-learning-robot-hand-ai-artificial-intelligence-assistance-human-touching-on-big.jpg?s=612x612&w=0&k=20&c=MlbHdhkfqetT9b9kq58EPb2x_twui75NS-dCY01nf4Q=", description: "Süni intellektin emosional zəka və empatiya təqlidi etmə potensialı Süni intellekt və insan yaradıcılığının birləşməsi: İncəsənət, musiqi, proqramlaşdırma" },
  { title: "Süni İntellekt və Etika", image: "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", description: "Ayrı-seçkilik Süni intellektin insanlar üzərindəki təsiri və iş gücü Süni intellektin qərar qəbul etmə proseslərində şəffaflıq və cavabdehlik Super süni intellektin yaranması halında mümkün nəticələr" }
];

function Blog() {
  return (
    <section style={styles.blogSection}>
      <h2 style={styles.sectionTitle}>Blog</h2>
      <div style={styles.cardContainer}>
        {blogPosts.map((post, index) => (
          <div key={index} style={styles.card}>
            <img src={post.image} alt={post.title} style={styles.cardImage} />
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{post.title}</h3>
              <p style={styles.cardDescription}>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  blogSection: {
    padding: '40px', // Komanda səhifəsi ilə uyğunlaşdı
    backgroundColor: '#020a18',
    color: '#fff',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2.5em', // Daha böyük başlıq ölçüsü
    fontWeight: 'bold',
    color: 'lightgrey',
    marginBottom: '30px', // Başlıq ilə məzmun arasında daha çox boşluq
  },
  cardContainer: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    maxWidth: '250px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
  },
  cardImage: {
    width: '100%',
    height: '150px',
    cursor:'pointer',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '15px',
    cursor:'pointer',
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

export default Blog;
