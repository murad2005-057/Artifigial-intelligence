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


const Home = () => {
  return (
<>

  <Introduction/>
<PartnerContainer/>
<PartnerCompany/>
<Apply/>
<AwardsContainer/>
<Awesome/>
<ContactForm/>
<Blog/>
<Services/>
<TeamSection/>
<Footer/>
</>
  )
}

export default Home