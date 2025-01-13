import styled from 'styled-components';
import { Container, Title } from '../../globalStyles';
import ProjectCard from './ProjectCard';
import project1 from '../../assets/project1.jpeg';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
const projects = [
  {
    date: 'Nov 2023',
    name: 'NextUp Comedy',
    liveLink: 'https://nextup-comedy.netlify.app/',
    codeLink:
      'https://github.com/NextUp-comedy/documentation?tab=readme-ov-file',
    image: project1
  },
  {
    date: 'May 2023',
    name: 'Country Information',
    liveLink: 'https://countries-information-rand.netlify.app/',
    codeLink: 'https://github.com/RandSohail/country_information_dshboard',
    image: project2
  },

  {
    date: 'Mar 2022',
    name: 'To Watch List',
    liveLink:
      'https://6244bb4fae122b0a7585fd20--genuine-frangollo-64dddc.netlify.app/',
    codeLink: 'https://github.com/RandSohail/ToWatchList-HR',
    image: project3
  },
  {
    date: 'Apr 2022',
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
                date={item.date}
                name={item.name}
                liveLink={item.liveLink}
                codeLink={item.codeLink}
                image={item.image}
              />
            ))}
            {/* <ProjectCard
              date="Nov 2022"
              name="NextUp Comedy"
              liveLink="https://nextup-comedy.netlify.app/"
              codeLink="https://github.com/NextUp-comedy/documentation?tab=readme-ov-file"
              image={project1}
            /> */}
            {/* <ProjectCard
              date="Apr 2023"
              name="Lazzaro"
              liveLink=""
              codeLink=""
              image={image}
            />
            <ProjectCard
              date="Jun 2023"
              name="GFS"
              liveLink=""
              codeLink=""
              image={image}
            />
            <ProjectCard
              date="Sep 2023"
              name="Test"
              liveLink=""
              codeLink=""
              image={image}
            /> */}
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
