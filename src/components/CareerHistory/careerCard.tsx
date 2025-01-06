import React from 'react';
import styled from 'styled-components';
import { Title } from '../../globalStyles';

interface CareerCardProps {
  position: string;
  company: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

const CareerCard: React.FC<CareerCardProps> = ({
  position,
  company,
  description,
  details,
  icon
}) => {
  return (
    <CardContainer>
      <FirstSection>
        <div>
          <Title>{position}</Title>
          <CardCompany>{company}</CardCompany>
        </div>
        <Logo>{icon}</Logo>
      </FirstSection>
      <p>{description}</p>
      <ul>
        {details && details.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 80%;
  margin: auto;
  padding: 0 20px;
  @media (max-width: 600px) {
    height: fit-content;
  }
`;

const FirstSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardCompany = styled.h4`
  font-size: 18px;
`;
const Logo = styled.div`
  width: 200px;
`;
export default CareerCard;
