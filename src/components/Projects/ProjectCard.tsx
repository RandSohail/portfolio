import styled from 'styled-components';

interface ProjectCardProps {
  name: string;
  liveLink: string;
  codeLink: string;
  image: string;
}

export default function ProjectCard({
  name,
  liveLink,
  codeLink,
  image
}: ProjectCardProps) {
  return (
    <>
      <ProjectCardContainer>
        <ProjectImage image={image}>
          <Overlay>
            <ProjectName>
              {name} <br />
              <Link target='_blank'  href={liveLink}>Live</Link> |{' '}
              <Link target='_blank' href={codeLink}>Code</Link>
            </ProjectName>
          </Overlay>
        </ProjectImage>
      </ProjectCardContainer>
    </>
  );
}

const ProjectCardContainer = styled.div`
  width: fit-content;
  display: flex;
  /* border: 1px solid white; */
`;

interface ProjectImageProps {
  image: string;
}

const ProjectImage = styled.div<ProjectImageProps>`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.image});
  &:hover {
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.507),
        rgba(0, 0, 0, 0.507)
      ),
      url(${(props) => props.image});
  }
`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
`;

const ProjectName = styled.span`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;
const Link = styled.a`
  color: var(--color2);
  text-decoration: none;
  &:hover {
    color: var(--color3);
  }
`;
