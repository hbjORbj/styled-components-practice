import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    box-sizing: border-box;
    margin:0;
  }
`;

const card = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Input = styled.input.attrs({
  required: true,
})`
  border-radius: 30px;
  border: none;
  margin-left: 30px;
  ${card};
`;

const Container = styled.div`
  height: 100vh;
  background-color: orange;
  width: 100%;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Input placeholder="Your Name" />
    </Container>
  );
}

export default App;
