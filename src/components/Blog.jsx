import React from 'react';

const blogPosts = [
  {
    title: "What is Artificial Intelligence?",
    image: "https://media.istockphoto.com/id/1628553826/photo/ai-or-artificial-intelligence-concept-businessman-using-computer-use-ai-to-help-business-and.jpg?s=612x612&w=0&k=20&c=Ii4XvGWruTsPHcFBofrHRGUHTA4lI-Oe06V4Q_gBeQY=",
    description: "The core definition and history of artificial intelligence. Types of artificial intelligence: Narrow AI, general AI, and super AI, and the differences between them. The development of AI and its early successful applications.",
  },
  {
    title: "Artificial Intelligence and the Future",
    image: "https://media.istockphoto.com/id/1979289147/photo/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer.jpg?s=2048x2048&w=is&k=20&c=CnYhOjeTPisYsN-OLYVp60ZNKK3jP3JCPZrCjxCqmto=",
    description: "The interaction between artificial intelligence, robots, and humans. The revolutionary impact of artificial intelligence in healthcare. Collaboration and responsibilities between humans and artificial intelligence.",
  },
  {
    title: "Artificial Intelligence and Human Connection",
    image: "https://media.istockphoto.com/id/1435014643/photo/ai-machine-learning-robot-hand-ai-artificial-intelligence-assistance-human-touching-on-big.jpg?s=612x612&w=0&k=20&c=MlbHdhkfqetT9b9kq58EPb2x_twui75NS-dCY01nf4Q=",
    description: "The potential of artificial intelligence to mimic emotional intelligence and empathy. The fusion of artificial intelligence and human creativity: Art, music, and programming.",
  },
  {
    title: "Artificial Intelligence and Ethics",
    image: "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Discrimination. The impact of artificial intelligence on people and the workforce. Transparency and accountability in AI decision-making processes. Possible outcomes in the event of the emergence of super AI.",
  },
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
