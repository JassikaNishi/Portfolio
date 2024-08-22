import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomePage>
      <h1>Hi, I'm Jassika</h1>
      <p>
        A hardworking and enthusiastic individual with a strong desire to gain and implement
        knowledge in real life to positively impact people's lives. I thrive on tackling complex
        problems, building scalable web applications, and driving innovation through collaborative
        projects.
      </p>
    </HomePage>
  );
};

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('/path-to-background-image.jpg') no-repeat center center/cover;
  color: #fff;
`;

export default Home;