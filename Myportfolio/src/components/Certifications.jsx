import React from 'react';
import styled from 'styled-components';

const Certifications = () => {
  const certificationsList = [
    'MATLAB Onramp',
  ];

  return (
    <CertificationsPage>
      <h1>Certifications</h1>
      <ul>
        {certificationsList.map((certification, index) => (
          <li key={index}>{certification}</li>
        ))}
      </ul>
    </CertificationsPage>
  );
};

const CertificationsPage = styled.div`
  padding: 2rem;
  text-align: center;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 1rem 0;
    font-size: 1.2rem;
  }
`;

export default Certifications;
