import React,{useState} from 'react';
import styled from 'styled-components'

const Modal = () => {
  const [modalState, setModalState] = useState(false)
  const handleClickModalOff = ()=>{setModalState(false)}
  const handleClickModalOn = ()=>{setModalState(true)}

  return(
    <>
    <Container>
        {
          modalState
          ?
          <>
            <ModalBackground color={'rgba(0,0,0,0.3)'}>
              <Title>Modal</Title>
              <ModalBox>
                <CloseBtn onClick={handleClickModalOff}>x</CloseBtn>
                <Text>HELLO CODESTATES !</Text>
              </ModalBox>
            </ModalBackground>
          </>
          :
          <>
            <ModalBackground color={'none'}>
              <Title>Modal</Title>            
              <OpenBtn onClick={handleClickModalOn}>Open Modal</OpenBtn>
            </ModalBackground>
          </>
        }
        </Container>
    </>
  )
}
export default Modal;

const Container = styled.div`
  width:80vw;
  margin:0 auto;
  border:1px solid #ccc;
  border-radius:10px;
  box-sizing:border-box;
`

const ModalBackground = styled.div`
  width:100%;
  height:300px;
  background:${ (props) => props.color };
`

const Title = styled.h1`
  font-size:20px;
  padding:10px;
  margin:0;
`

const ModalBox = styled.div`
  width:400px;
  height:100px;
  border:none;
  border-radius:20px;
  background:#fff;
  color:#444;

  position:relative;
  left:50%;
  top:50%;
  transform:translate(-50%,-100%);

  `

const CloseBtn = styled.span`
  position:absolute;
  top:10px;
  left:50%;
  transform:translate(-50%,0);
  cursor:pointer;

`
const Text = styled.span`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,0);
`

const OpenBtn = styled.div`
  width:120px;
  height:50px;
  display:flex;
  justify-content: center;
  align-items:center;
  background:purple;
  margin-top:80px;
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  color:#fff;
  border-radius:25px;
  cursor:pointer;
`