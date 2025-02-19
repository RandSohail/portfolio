import styled from 'styled-components';
import { Container, Title } from '../../globalStyles';
import ProjectCard from './ProjectCard';
import project1 from '../../assets/project1.jpeg';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import project5 from '../../assets/project5.png';
const projects = [
  {
    name: 'NextUp Comedy',
    liveLink: 'https://nextup-comedy.netlify.app/',
    codeLink:
      'https://github.com/NextUp-comedy/documentation?tab=readme-ov-file',
    image: project1
  },
  {
    name: 'Personal Finance Tracker',
    liveLink: 'https://personal-finance-tracker-jade.vercel.app/',
    codeLink:
      'https://github.com/RandSohail/personal_finance_tracker',
    image: project5
  },
  {
    name: 'Country Information',
    liveLink: 'https://countries-information-rand.netlify.app/',
    codeLink: 'https://github.com/RandSohail/country_information_dshboard',
    image: project2
  },

  {
    name: 'To Watch List',
    liveLink:
      'https://6244bb4fae122b0a7585fd20--genuine-frangollo-64dddc.netlify.app/',
    codeLink: 'https://github.com/RandSohail/ToWatchList-HR',
    image: project3
  },
  {
    name: 'Reflex',
    liveLink: 'https://reflex-ry.netlify.app/',
    codeLink: 'https://github.com/RandSohail/movies-ry',
    image: project4
  }
];
export default function Projects() {
  return (
    <>
      <ProjectsContainer id="projects">
        <Container>
          <Title>My Projects</Title>
          <ProjectCardContainer>
            {projects.map((item, index) => (
              <ProjectCard
                key={index}
                name={item.name}
                liveLink={item.liveLink}
                codeLink={item.codeLink}
                image={item.image}
              />
            ))}
          </ProjectCardContainer>
        </Container>
      </ProjectsContainer>
    </>
  );
}

const ProjectsContainer = styled.div`
  background: #160f2194;
  padding: 50px 0px;
  h2 {
    text-align: center;
  }
`;

const ProjectCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;
