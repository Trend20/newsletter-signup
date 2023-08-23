import React from 'react';
import './App.css';
import Main from "./components/Main";
import styled, {IStyledComponent} from "styled-components";

const App = (): JSX.Element =>{
  return (
    <AppContainer className="app">
      <Main />
    </AppContainer>
  );
}

// styles
export const AppContainer = styled.div`
    display: flex;
  background: hsl(234, 29%, 20%);
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 100px;
`
export default App;

// :IStyledComponent<any>
