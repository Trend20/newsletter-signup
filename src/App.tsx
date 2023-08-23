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
  width: 70%;
  height: 800px;
  justify-content: center;
  align-items: center;
  padding: 100px;
  margin: 100px auto auto auto;

  @media (max-width: 768px) {
    width: 100%;
    background: #fff;
    padding: 20px;
    height: 100%;
    margin: 0;
  }
`
export default App;

// :IStyledComponent<any>
