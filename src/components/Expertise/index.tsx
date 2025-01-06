import styled from 'styled-components';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';
import { Container, Title } from '../../globalStyles';
import ExpertiseCard from './ExpertiseCard';

export default function Expertise() {
  return (
    <>
      <ExpertiseContainer id="expertise">
        <Container>
          <Title>Expertise</Title>
          <Sections>
            <ExpertiseCard
              icon={<FaReact />}
              title="Front End Developer"
              explanation="I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development."
              stackArray={[
                'React',
                'Redux',
                'TypeScript',
                'JavaScript',
                'HTML',
                'CSS',
                'SASS',
                'Bootstrap',
                'Material-UI',
                'Styled-Components'
              ]}
            />
            <ExpertiseCard
              icon={<FaNodeJs />}
              title="Back End Developer"
              explanation="I specialize in building robust server-side applications and RESTful APIs using Python and Node.js. Experienced in database design, server architecture, and implementing secure authentication systems."
              stackArray={[
                'Node.js',
                'Express.js',
                'MongoDB',
                'PostgreSQL',
                'RESTful APIs',
                'JWT'
              ]}
            />
            <ExpertiseCard
              icon={<GoGear />}
              title="Project Management"
              explanation="Experienced in leading cross-functional teams and delivering successful projects using Agile methodologies. Skilled in sprint planning, risk management, and stakeholder communication to ensure project success."
              stackArray={[
                'Agile',
                'Scrum',
                'JIRA',
                'Trello',
                'Risk Management',
                'Sprint Planning',
                'Stakeholder Management'
              ]}
            />
          </Sections>
        </Container>
      </ExpertiseContainer>
    </>
  );
}

const ExpertiseContainer = styled.div`
  background: #160f2194;
  padding: 50px 0px;
`;
const Sections = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 950px) {
    /* border: 1px solid white; */
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
  }
`;
