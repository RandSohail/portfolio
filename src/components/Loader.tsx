import styled from 'styled-components';
import LoaderImage from '../assets/loader.gif';

export default function Loading() {
  return (
    <LoaderContainer>
      <LoaderSpinner src={LoaderImage} />
      <h2>Loading, please wait...</h2>
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 100vh;
  background-color: var(--color1);
  text-align: center;
`;
const LoaderSpinner = styled.img`
  width: 150px;
  height: 150px;
`;
