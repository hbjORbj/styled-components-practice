import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    box-sizing: border-box;
    margin:0;
  }
`;

const Card = styled.div`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 20px;
  background-color: ${(props) => props.theme.dangerColor};
`;

const Button = styled.button`
  padding: 25px 50px;
  background-color: ${(props) => props.theme.successColor};
`;

const Container = styled.div`
  height: 100vh;
  background-color: orange;
  width: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Form />
      </Container>
    </ThemeProvider>
  );
}

const Form = () => (
  <Card>
    <Button></Button>
  </Card>
);

export default App;
