import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  const skillsList = {
    Programming: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Python', 'Java', 'Assembly Language'],
    Design: ['Canva'],
    Tools: ['MATLAB', 'VS Code', 'Keil', 'Oracle', 'Python IDLE'],
    Languages: ['English (Fluent)', 'Hindi (Native)'],
  };

  return (
    <SkillsPage>
      <h1>My Skills</h1>
      <SkillSection>
        {Object.keys(skillsList).map((category, index) => (
          <SkillCategory key={index}>
            <h3>{category}</h3>
            <ul>
              {skillsList[category].map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </SkillCategory>
        ))}
      </SkillSection>
    </SkillsPage>
  );
};

const SkillsPage = styled.div`
  padding: 2rem;
  text-align: center;
`;

const SkillSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const SkillCategory = styled.div`
  margin: 1rem 0;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 0.5rem 0;
  }
`;

export default Skills;