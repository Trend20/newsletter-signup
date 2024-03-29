import {FormEvent, useState} from 'react';
import MainImg from '../assets/images/illustration-sign-up-desktop.svg'
import Updates from "./Updates";
import Subscribe from "./Subscribe";
import styled from "styled-components";
// import Swal from 'sweetalert2'

const Main = (): JSX.Element =>{
    const [email, setEmail] = useState<string>('')
    const [error, setError] = useState<string>('')

    const handleSubmit = (e:FormEvent) =>{
        e.preventDefault()
    }
    return (
        <MainPageContainer className="main">
            <MainTextContainer className="main-text">
                <h1>Stay updated!</h1>
                <Updates />
                <Subscribe email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
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
  border: none;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 30px;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 0;
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

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 10px;
    }
  }

  @media (max-width: 768px) {
   width: 100%;
    padding: 0;
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

    @media (max-width: 768px) {
      width: 100%;
      //height: 300px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`
export default Main;
