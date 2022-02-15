// import './App.css';
import styled from 'styled-components';
import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';

function App() {
    return (
        <>
            <Container>
                <Toggle />
                <Modal />
                <Tab />
                <Tag />
                <ClickToEdit />
                <AutoComplete />
            </Container>
        </>
    );
}

export default App;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
