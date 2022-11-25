import styled from "styled-components";

const Title = styled.h1`
  color: ${props => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vh;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>goodJob</Title>
    </Wrapper>
  );
}

export default App;
