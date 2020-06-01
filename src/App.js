import React from "react";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    box-sizing: border-box;
    margin:0;
  }
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Button>Success</Button>
      <Button danger>Danger</Button>
      <Anchor as="a" href="HA">
        HAHA
      </Anchor>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: orange;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 30px;
  margin-right: 150px;
  margin-top: 100px;
  border: 1px none black;
  padding: 5px 10px;
  width: 200px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: ${(props) => (props.danger ? "red" : "green")};
  ${(props) => {
    if (props.danger) {
      return css`
        animation: ${rotation} 2s linear infinite;
      `;
    }
  }}
`;

const Anchor = styled(Button)`
  text-decoration: none;
  color: white;
`;

const rotation = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export default App;
