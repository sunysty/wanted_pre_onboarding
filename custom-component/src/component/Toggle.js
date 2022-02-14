import React,{useState} from 'react';
import styled from 'styled-components';

const Toggle = () => {
    const [toggleState, setToggleState] = useState(false);
    

    return(
    <>
    <Container>
        <Title>Toggle</Title>
        {
        toggleState
        ?
        <>
        <ToggleBox color={'#8b00ff'} jc={'flex-end'} onClick={()=>setToggleState(false)}> 
            <ToggleBtn/>
        </ToggleBox>
        <Text>Toggle Switch ON</Text>
        </>
        :
        <>
        <ToggleBox  color={'#d3d3d3'} jc={'flex-start'} onClick={()=>setToggleState(true)}> 
            <ToggleBtn/>
        </ToggleBox>
        <Text>Toggle Switch OFF</Text>
        </>
        }
        </Container>
    </>
    )
}

export default Toggle;

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

const ToggleBox = styled.div`
    width:60px;
    height:30px;
    background:${props => props.color};
    border-radius:20px;
    margin:100px auto 10px;
    padding:2px;
    box-sizing:border-box;
    display:flex;
    flex-direction:row;
    justify-content:${props => props.jc};
    transition: all 0.5s ease-out;
`

const ToggleBtn = styled.button`
    width:25px;
    height:25px;
    border-radius:50%;
    border:none;
    background:#fff;
    transition:ease-out 0.1s;

`

const Text = styled.span`
    display:flex;
    justify-content:center;
`