import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactPage>
      <h1>Contact Me</h1>
      <ContactDetails>
        <p>Email: <a href="mailto:jassika.jassika.jassika@gmail.com">jassika.jassika.jassika@gmail.com</a></p>
        <p>Phone: <a href="tel:+916287553967">+91 6287553967</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/jassika" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        <p>GitHub: <a href="https://www.github.com/jassika" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
      </ContactDetails>
    </ContactPage>
  );
};

const ContactPage = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ContactDetails = styled.div`
  p {
    margin: 1rem 0;
    font-size: 1.2rem;
  }

  a {
    color: #333;
  }
`;

export default Contact;
