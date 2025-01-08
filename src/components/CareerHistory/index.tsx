import styled from 'styled-components';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Container, Title } from '../../globalStyles';
import code from '../../assets/coding.png';
import CareerCard from './careerCard';
import GFS from '../../assets/Google_for_Startups_logo.svg.png';
import Lazzaro from '../../assets/lazzaro.png';
import TrustAngle from '../../assets/trustangle-logo-white.svg';
import GSG from '../../assets/06b18d8acdb6c1ea4e7ff305b70cb160-1024x725.webp';

interface Career {
  position: string;
  company: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

export default function History() {
  const careers: Career[] = [
    {
      position: 'Full Stack Developer',
      company: 'Lazzaro - Part Time',
      description:
        'Lázzaro is a tech company turning ideas into reality with services like web development, apps, and blockchain. Focused on social impact, they create NGO platforms and explore innovations like NFTs and crypto-donations, delivering sustainable, cutting-edge solutions.',
      details: [
        'Efficiently addressed urgent tickets and critical issues, ensuring the stability and reliability of the software platform.',
        'Designed and developed new features in alignment with project requirements, enhancing the platform functionality and user experience.',
        'Collaborated with cross-functional teams to identify and resolve bugs, enhancing the quality of the existing codebase.'
      ],
      icon: <img src={Lazzaro} alt="Google For Startups" />
    },
    {
      position: 'Full Stack Developer',
      company: 'Google For Startups - Full Time',
      description:
        'NextUp-comedy is a CMS that allows site owners & comedians to be able to Manage their uploaded videos on the NextUp Website.',
      details: [
        'Created and handled front-end state management using Redux and implemented responsive styling with CSS.',
        'Designed and implemented secure authentication and authorization systems for role management.',
        'Checked and validated user input to ensure data integrity and prevent security vulnerabilities.',
        'Handled database management and optimized application performance.'
      ],
      icon: <img src={GFS} alt="Google For Startups" />
    },

    {
      position: 'Frontend Web Developer ',
      company: 'TrustAngel - Full Time',
      description:
        'leading technology and business consultancy delivering innovative solutions across industries like retail, hospitality, and automotive. We offer products like ERP, POS, and digital solutions, alongside services including AI, IoT, and data analytics. With a focus on customer success and digital transformation, trustangle empowers businesses to achieve their goals.',
      details: [
        'Design and Create more than 10 landing pages with the marketing team',
        'Developed fully functional web pages using Vue, especially for reachware projects.',
        'Practiced creating Vue components, authentication, and form handling, as well as implementing efficient data display for Jigsaw.'
      ],
      icon: <img src={TrustAngle} alt="" />
    },
    {
      position: 'Full Stack Developer',
      company: 'Gaza Sky Geeks - (Bootcamp), Full Time',
      description:
        'Intensive +20 weeks Bootcamp using the latest frontend and backend technologies.',
      details: [
        'Built projects using pure HTML, CSS, JS, and React.',
        'Built APIs using nodeJs and Express.',
        'Used SCRUM methodology in managing weekly projects.'
      ],
      icon: <img src={GSG} alt="" />
    }
  ];
  return (
    <>
      <CareerContainer id="career-history">
        <Container>
          <Title>Career History</Title>
          <CardContainer>
            <CarouselContainer>
              <Carousel
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                autoPlay
                infiniteLoop
              >
                {careers.map((career, index) => (
                  <CareerCard
                    key={index}
                    position={career.position}
                    company={career.company}
                    description={career.description}
                    details={career.details}
                    icon={career.icon}
                  />
                ))}
              </Carousel>
            </CarouselContainer>
          </CardContainer>
        </Container>
      </CareerContainer>
    </>
  );
}
const CareerContainer = styled.div`
  padding: 50px 0px;
`;

const CarouselContainer = styled.div`
  ul {
    li.dot {
      background: var(--color2) !important;
    }
  }
  .carousel .slide {
    text-align: left;
  }
`;

const CardContainer = styled.div`
  background-image: url(${code});
  width: 80%;
  margin: 0 auto;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 4.7%;
  @media (max-width: 750px) {
    padding-top: 15%;
  }
`;
