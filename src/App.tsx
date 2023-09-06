import React from 'react';
import './App.css';
import Main from "./components/Main";
import styled, {IStyledComponent} from "styled-components";

const App = (): JSX.Element =>{
  return (
    <AppContainer className="app">
      <div className="content">
          <Main />
      </div>
    </AppContainer>
  );
}

// styles
export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 100px;
  overflow: hidden !important;

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
