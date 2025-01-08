import styled from 'styled-components';
import { Container, Title } from '../../globalStyles';
import ProjectCard from './ProjectCard';
import image from '../../assets/coding.png';
export default function Projects() {
  return (
    <>
      <ProjectsContainer id="projects">
        <Container>
          <Title>My Projects</Title>
          <ProjectCardContainer>
            <ProjectCard
              date="Dec 2024"
              name="Finance Tracker"
              liveLink=""
              codeLink=""
              image={image}
            />
            <ProjectCard
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
            />
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
