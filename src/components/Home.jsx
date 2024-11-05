import React from 'react'
import Introduction from './Introduction';
import PartnerContainer from './PartnerContainer';
import PartnerCompany from './PartnerCompany';
import Apply from './Apply';
import AwardsContainer from './AwardsContainer';
import Awesome from './Awesome';
import Footer from './Footer';

import ContactForm from './ContactForm';
import EducationalResources from './EducationalResources';
import ToolsAndResources from './ToolsAndResources';
import RealWorldApplications from './RealWorldApplications';
import InteractiveElements from './InteractiveElements';
import CertificationPrograms from './CertificationPrograms';
const Home = () => {
  return (
<>

  <Introduction/>
<PartnerContainer/>
<PartnerCompany/>
<Apply/>
<AwardsContainer/>
<Awesome/>
<EducationalResources/>
<ToolsAndResources/>
<RealWorldApplications/>
<InteractiveElements/>
<CertificationPrograms/>
<ContactForm/>
<Footer/>
</>
  )
}

export default Home