import React,{useState} from 'react';
import styled from 'styled-components'

const Tag = () => {

  const [tag, setTag] = useState([])
  const onChange = (e) => setTag(e.target.value)
  const handleKeyPress = (e) => {if(e.key === "Enter"){}}
  
  return( 
    <>
    <Container>
      <Title>Tag</Title>
      <div>
        {tag && tag?.map((el,v) => {return(<div>{tag}</div>)})
        }
        </div>
      <input 
        onKeyPress={tag.push(onChange)} 
        onChange={onChange} 
        placeholder={'Press enter to add tags'}
      />
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