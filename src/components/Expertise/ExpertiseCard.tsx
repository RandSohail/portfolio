import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  explanation: string;
  stackArray: string[];
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  icon,
  title,
  explanation,
  stackArray
}) => {
  return (
    <>
      <ExpertiseCardContainer>
        <Logo>{icon}</Logo>
        <h2>{title}</h2>
        <p>{explanation}</p>
        <StackContainer>
          <span>Tech Stack: </span>
          {stackArray.map((stack) => (
            <StackItem key={stack}>{stack}</StackItem>
          ))}
        </StackContainer>
      </ExpertiseCardContainer>
    </>
  );
};

const ExpertiseCardContainer = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  box-sizing: border-box;
  padding: 15px;
  @media (max-width: 950px) {
    margin-top: 10px;
    width: 70%;
  }
`;
const Logo = styled.div`
  svg {
    width: 50px;
    height: 50px;
  }
`;

const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const StackItem = styled.span`
  color: black;
  font-size: 14px;
  background-color: #fff;
  padding: 7px;
  border-radius: 50px;
`;

ExpertiseCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  stackArray: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default ExpertiseCard;
