import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const roationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px; 
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${roationAnimation} 1s linear infinite;
  ${Emoji} {  /* 스타일 컴포넌트 자체를 조작 : 가장 쿨한 부분. */
    font-size: 36px;
    &:hover {
      /* & = span*/
      font-size: 98px;

    }
    &:active {
      opacity: 0;

  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😃</Emoji>
      </Box>
      <Emoji>💗</Emoji>
    </Wrapper>
  );
}

export default App;
