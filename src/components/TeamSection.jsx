import React from 'react';
import styled from 'styled-components';

// Komanda üzvlərinin məlumatları
const teamMembers = [
  {
    name: 'Murad Abbaslı',
    bio: 'İsntagram:@abbasoofff57',
    imgSrc: 'member1.jpg', 
  },
  {
    name: 'Tural Cavadzadə',
    bio: 'İnstagram:t.cavadov',
    imgSrc: 'member2.jpg', 
  },
  {
    name: 'Murad Orucov',
    role: 'Frond-End proqramlaşdırma üzrə təlimçi',
    bio: 'İnstagram: codify.info',
    imgSrc: 'https://itbrains.edu.az/src/img/teachers/15c80744-7bc2-4788-a723-d47db0c978df_MG_1859-compressed.jpg', 
  },
];

const TeamSection = () => {
  return (
    <TeamContainer>
      <Title>Komandamız</Title>
      <TeamMembers>
        {teamMembers.map((member, index) => (
          <TeamMember key={index}>
            <MemberImage src={member.imgSrc} alt={member.name} />
            <MemberName>{member.name}</MemberName>
            <MemberBio>{member.bio}</MemberBio>
          </TeamMember>
        ))}
      </TeamMembers>
    </TeamContainer>
  );
};

export default TeamSection;

// Styled Components

const TeamContainer = styled.section`
  text-align: center;
  padding: 40px;
  background-color: #020a18 ;
 
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 30px;
  color: #fff;
`;

const TeamMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #fff ;
   background-color: #020a18;
  justify-content: center;
  gap: 30px;
`;

const TeamMember = styled.div`
  display: inline-block;
  width: 250px;
  padding: 20px;
  background-color:#08101d ;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const MemberImage = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
`;

const MemberName = styled.h3`
  font-size: 1.5em;
  color: #fff;
  margin: 5px 0;
`;

const MemberRole = styled.p`
  font-size: 1.1em;
  color: #fff;
  margin: 5px 0;
`;

const MemberBio = styled.p`
  color: gray;
  font-style: italic;
  font-size: 1em;
  margin-top: 10px;
`;

