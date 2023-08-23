import React from 'react';
import styled from "styled-components";

const Subscribe = (): JSX.Element =>{
    return (
        <SubscribeContainer className="subscribe">
            <FormContainer id='sub-form'>
                <InputContainer className="input">
                    <label htmlFor="emailAddress">Email Address</label>
                    <input type="text" placeholder='email@company.com'/>
                </InputContainer>
                <ButtonElement>Subscribe to monthly newsletter</ButtonElement>
            </FormContainer>
        </SubscribeContainer>
    );
}

// styles
export const SubscribeContainer = styled.div`
    display: flex;
  width: 100%;
  padding-top: 30px;
`

export const FormContainer = styled.form`
    display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputContainer = styled.div`
    display: flex;
  width: 100%;
  flex-direction: column;
  
  label{
    margin-top: 20px;
  }
  input{
    margin-top: 20px;
    padding: 18px;
    outline: none;
    border-radius: 5px;
  }
  
  input::placeholder{
    opacity: .6;
    font-size: 16px;
  }
`

export const ButtonElement = styled.button`
    border: none;
  padding: 18px;
  margin-top: 20px;
  background: hsl(234, 29%, 20%);
  outline: none;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
`

export default Subscribe;
