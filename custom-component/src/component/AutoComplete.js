import React from 'react';
import styled from 'styled-components';

const AutoComplete = () => {
  return( 
    <>
    <Container>
      <Title>AutoComplete</Title>
    </Container>
    </>
  )
}

export default AutoComplete;

const Container = styled.div`
  width:80vw;
  margin:0 auto;
  border:1px solid #ccc;
  border-radius:10px;
  box-sizing:border-box;
`

const Title = styled.h1`
  font-size:20px;
  padding:10px;
  margin:0;
`