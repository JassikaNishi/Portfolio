import React from 'react';
import styled from 'styled-components';

const Education = () => {
  const educationList = [
    {
      institution: 'Vellore Institute of Technology, Vellore',
      degree: 'B.Tech. in Electronics and Communications Engineering with Specialization in Biomedical Engineering',
      duration: '2022 - 2026',
      cgpa: 'CGPA: 8.78/10',
    },
    {
      institution: 'Delhi Public School, Ranchi, India',
      degree: 'AISSCE (Class XII)',
      duration: '2020 - 2022',
      percentage: '92.4%',
    },
    {
      institution: 'M.K.D.A.V. Public School, India',
      degree: 'AISSE (Class X)',
      duration: '2009 - 2020',
      percentage: '97.8%',
    },
  ];

  return (
    <EducationPage>
      <h1>My Education</h1>
      <EducationSection>
        {educationList.map((edu, index) => (
          <EducationItem key={index}>
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <p>{edu.duration}</p>
            {edu.cgpa && <p>{edu.cgpa}</p>}
            {edu.percentage && <p>{edu.percentage}</p>}
          </EducationItem>
        ))}
      </EducationSection>
    </EducationPage>
  );
};

const EducationPage = styled.div`
  padding: 2rem;
  text-align: center;
`;

const EducationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EducationItem = styled.div`
  margin: 2rem 0;
`;

export default Education;
