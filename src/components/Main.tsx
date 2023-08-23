import React from 'react';
import MainImg from '../assets/images/illustration-sign-up-desktop.svg'
import Updates from "./Updates";
import Subscribe from "./Subscribe";
import styled from "styled-components";

const Main = (): JSX.Element =>{
    return (
        <MainPageContainer className="main">
            <MainTextContainer className="main-text">
                <h1>Stay updated!</h1>
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
  border: none;
  width: 80%;
  height: 100%;
  border-radius: 30px;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`

export const MainTextContainer = styled.div`
    display: flex;
  flex-direction: column;
  width: 50%;
  padding: 30px;
  
  h1{
    display: flex;
    font-weight: 700;
    font-size: 3rem;
    margin-top: 50px;
  }

  @media (max-width: 768px) {
   width: 100%;
  }
`

export const MainImageContainer = styled.div`
    display: flex;
  flex-direction: column;
  //width: 50%;
  
  img{
    display: flex;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`
export default Main;
