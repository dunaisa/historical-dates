import styled from "styled-components";
import Background from './assets/images/background.png';

function App() {

  const AppContainer = styled.main`
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppContent = styled.div`
  display: flex;
  position: relative;
  max-width: 1440px;
  width: 100%;
  border: 1px solid #000000;
`

const Title = styled.h1`
  font-family: 'PT Sans', sans-serif;
  font-size: 56px;
  line-height: 67.2px;
  display: inline-block;
  width: 353px;
  word-wrap: break-word;
  color: #42567A;
  z-index: 2;
`;

const BackgroundLinesContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid #000;
  z-index: 1;
`;


  return (
    <AppContainer>
      <AppContent>
        <BackgroundLinesContainer />
        <Title>Исторические даты</Title>

      </AppContent>
      
    </AppContainer>
  );
}

export default App;
