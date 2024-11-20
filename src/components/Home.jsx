import React from 'react'
import Introduction from './Introduction';
import PartnerContainer from './PartnerContainer';
import PartnerCompany from './PartnerCompany';
import Apply from './Apply';
import AwardsContainer from './AwardsContainer';
import Awesome from './Awesome';
import Footer from './Footer';
import ContactForm from './ContactForm';
import Services from '././Services';
import Blog from './Blog';
import TeamSection from './TeamSection';
import FeedbackForm from './FeedbackForm';


const Home = () => {
  return (
<>

  <Introduction/>
<PartnerContainer/>
<PartnerCompany/>
<Apply/>
<AwardsContainer/>
<Awesome/>
<Blog/>
<Services/>
<TeamSection/>
<ContactForm/>
<Footer/>
<FeedbackForm/>
</>
  )
}

export default Home