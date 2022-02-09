import React,{useState} from 'react';
import styled from 'styled-components';


const Tab = () => {

  const [tabIdx, setTabIdx] = useState(null); 

  return( 
    <>
      <Container>
        <Title>Tab</Title>
        <TabBox>
          <TabItem onClick={()=>setTabIdx('ONE')}>Tab1</TabItem>
          <TabItem onClick={()=>setTabIdx('TWO')}>Tab2</TabItem>
          <TabItem onClick={()=>setTabIdx('THREE')}>Tab3</TabItem>
        </TabBox>
        <ContentsBox>
          Tab menu {tabIdx}
        </ContentsBox>
      </Container>
    </>
  )
}

export default Tab;

const Container = styled.div`
  width:80vw;
  height:300px;
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

const TabBox = styled.div`
  width:65vw;
  height:50px;
  display:flex;
  flex-direction:row;
  margin: 0 auto;
  background:#ddd;
`

const TabItem = styled.div`
  width:20vw;
  height:100%;
  display:flex;
  align-items:center;
  transform:translateX(5vw);
  padding-left:10px;
  box-sizing:border-box;
  color:#aaa;
  font-weight:bold;
  transition:0.2s ease-out;
  &:hover{
    background: purple;
    cursor:pointer;
    color:#fff;
  }
`

const ContentsBox = styled.div`
  text-align:center;
  margin-top:80px;
`