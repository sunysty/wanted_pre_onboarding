// import './App.css';
import styled from 'styled-components'
import Toggle from './component/Toggle'
import Modal from './component/Modal';
import Tab from './component/Tab'
import Tag from './component/Tag'
import AutoComplete from './component/AutoComplete'
import ClickToEdit from './component/ClickToEdit';


function App() {
  return (
    <>
    <Container>
      <Toggle/>
      <Modal/>
      <Tab/>
      <Tag/>
      <AutoComplete/>
      <ClickToEdit/>
    </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display:flex;
  height:100vh;
  flex-direction:column;
  justify-content:space-around;
`