import React,{useState} from 'react';
import styled from 'styled-components';

const ClickToEdit = () => {
  const [name,setName] = useState(null)
  const [age,setAge] = useState(null)

  const onChange = () => {
    document.getElementById('nameId', 'ageId').addEventListener('focusout', e => { setName(e.target.value) }) 
    document.getElementById('nameId', 'ageId').addEventListener('focusout', e => { setName(e.target.value) }) 
  }

  return( 
    <>
    <Container>
      <Title>ClickToEdit</Title>
      <Box className="box">
        <Label>이름</Label>
        <Input type='text' onChange={onChange} value={name} id='nameId'/>
        <Label>나이</Label>
        <Input type='number' onChange={onChange} value={age} id='ageId'/>
      </Box>
      <Result>이름{name} 나이{age}</Result>
    </Container>
    </>
  )
}

export default ClickToEdit;

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

const Box = styled.div`
`

const Label = styled.label`

`
const Input = styled.input`

`

const Result = styled.div`
`