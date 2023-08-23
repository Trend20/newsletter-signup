import React from 'react';
import MainImg from '../assets/images/illustration-sign-up-desktop.svg'
import Updates from "./Updates";
import Subscribe from "./Subscribe";
import styled from "styled-components";

const Main = (): JSX.Element =>{
    return (
        <MainPageContainer className="main">
            <MainTextContainer className="main-text">
                <h1>Stay Updated!</h1>
                <Updates />
                <Subscribe />
            </MainTextContainer>
            <MainImageContainer className="main-image">
                <img src={MainImg} alt="main-image"/>
            </MainImageContainer>
        </MainPageContainer>
    );
}

// styles
export const MainPageContainer = styled.div `
    display: flex;
  background: #fff;
  padding: 20px;
  width: 60%;
  border: none;
  border-radius: 30px;
  justify-content: space-between;
`

export const MainTextContainer = styled.div`
    display: flex;
  flex-direction: column;
  width: 50%;
`

export const MainImageContainer = styled.div`
    display: flex;
  flex-direction: column;
  width: 50%;
`
export default Main;
