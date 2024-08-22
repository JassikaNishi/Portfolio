import React from 'react';
import styled from 'styled-components';

const Achievements = () => {
  const achievementsList = [
    'Winner, Ideathon – Heritage Hack (2024)',
    '3rd Place, Hackathon – Yantra Hackathon (2024)',
    'Branch Rank Holder – Academic Years 2022-23, 2023-24',
    'District Ranker – Grade 10',
  ];

  return (
    <AchievementsPage>
      <h1>My Achievements</h1>
      <ul>
        {achievementsList.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </AchievementsPage>
  );
};

const AchievementsPage = styled.div`
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

export default Achievements;
