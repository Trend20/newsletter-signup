import React from 'react';
import ListIcon from '../assets/images/icon-list.svg'
import styled from "styled-components";

const Updates = (): JSX.Element =>{
    return (
        <UpdatesContainer className="updates">
            <UpdateSpan>
                <img src={ListIcon} alt="icon"/>
                <p>Product discovery and building what matters.</p>
            </UpdateSpan>
            <UpdateSpan>
                <img src={ListIcon} alt="icon"/>
                <p>Measuring to ensure updates are a success.</p>
            </UpdateSpan>
            <UpdateSpan>
                <img src={ListIcon} alt="icon"/>
                <p>Add much more.</p>
            </UpdateSpan>
        </UpdatesContainer>
    );
}

// styles
export const UpdatesContainer = styled.div`
    display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 30px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const UpdateSpan = styled.div`
    display: flex;
  width: 100%;
  align-items: center;
 padding-top: 18px;
  
  p{
    margin-left: 15px;
  }

  @media (max-width: 768px) {
   width: 100%;
  }
`

export default Updates;
