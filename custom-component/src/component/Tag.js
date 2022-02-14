import React,{useState} from 'react';
import styled from 'styled-components'

const Tag = () => {

  const [text,setText] = useState([
    {id:1, contents:'hey'},
    ])
  const clickDeleteTagHandler = () => {}


  const keyPressInputHandler = (e)=>{
    if(e.key === 'Enter'){
      setText(e.target.value)
      return(
        <TagItem>
          {text[1].contents}
          <DeleteItem onClick={clickDeleteTagHandler}>x</DeleteItem>
        </TagItem>
      )
    }
    console.log('>>',text)
  }

  return( 
    <>
    <Container>
      <Title>Tag</Title>
      <TagBox>
        <TagItem>
        {text[0].contents}
          <DeleteItem onClick={clickDeleteTagHandler}>x</DeleteItem>
        </TagItem>
        <Input 
          type='text' 
          placeholder='Press enter to add tags' 
          onKeyPress={keyPressInputHandler}
        />
      </TagBox>
    </Container>
    </>
  )
}

export default Tag;

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

const TagBox = styled.div`
  width:80%;
  display:flex;
  flex-direction:row;
  align-items:center;
  border:1px solid #999;
  padding:10px;
  margin:0 auto;
  box-sizing:border-box;
  border-radius:5px;
`

const TagItem = styled.div`
  padding:5px 7px;
  box-sizing:border-box;
  margin-right:10px;  
  display:flex;
  flex-direction:row;
  align-items:center;
  border-radius:5px;
  background: purple;
  color:#fff;
  font-size:15px;
`

const DeleteItem = styled.div`
  width: 15px;
  height: 15px;
  margin: 0 0 0 7px;
  border-radius:50%;
  background:#fff;
  color:purple;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
`

const Input = styled.input`
  border:none;
  padding:5px;
`