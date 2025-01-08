import styled from 'styled-components';
import Type from './type';
import SpaceDeveloper from '../assets/dev.png';
import { Button } from './styles';

export default function Home() {
  return (
    <>
      <HomeContainer>
        <TextSection>
          <InnerText>
            <h1>
              Hi There! <Wave>👋🏻</Wave>
            </h1>
            <h1>
              {`I'M  `}
              <MainName> Rand Sohail</MainName>
            </h1>
            <Type />
          </InnerText>
          <Button href="#contact">Contact Me</Button>
        </TextSection>
        <ImageSection>
          <img src={SpaceDeveloper} alt="" />
        </ImageSection>
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.header`
  width: 90%;
  height: 600px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  margin-top: 5px;
  @media (max-width: 650px) {
    height: 400px;
  }
`;
const TextSection = styled.main`
  width: 50%;
  height: 100%;
  padding-left: 50px;
  @media (max-width: 650px) {
    padding-left: 0px;
    width: 100%;
    text-align: center;
  }
`;
const InnerText = styled.section`
  padding-top: 70px;
  margin-bottom: 90px;
  @media (max-width: 650px) {
    padding-top: 0px;

    margin-bottom: 40px;
  }
`;
const ImageSection = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    height: 50%;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;
const MainName = styled.strong`
  background: var(--gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
`;
const Wave = styled.span`
  animation-name: wave-animation;
  animation-duration: 2.1s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
