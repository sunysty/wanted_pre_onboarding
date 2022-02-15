import React, { useState } from 'react';
import styled from 'styled-components';

const ClickToEdit = () => {
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);
    const onChangeName = () => {
        document.getElementById('nameId').addEventListener('focusout', (e) => {
            setName(e.target.value);
        });
    };
    const onChangeAge = () => {
        document.getElementById('ageId').addEventListener('focusout', (e) => {
            setAge(e.target.value);
        });
    };

    return (
        <>
            <Container>
                <Title>ClickToEdit</Title>
                <Box className='box'>
                    <InputContainer>
                        <Label>이름</Label>
                        <Input
                            type='text'
                            onChange={onChangeName}
                            id='nameId'
                        />
                    </InputContainer>
                    <InputContainer>
                        <Label>나이</Label>
                        <Input
                            type='number'
                            onChange={onChangeAge}
                            id='ageId'
                        />
                    </InputContainer>
                </Box>
                <Result>
                    이름 &nbsp; {name} &emsp; 나이 &nbsp; {age}
                </Result>
            </Container>
        </>
    );
};

export default ClickToEdit;

const Container = styled.div`
    width: 80vw;
    height: 300px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
`;

const Title = styled.h1`
    font-size: 20px;
    padding: 10px;
    margin: 0;
`;

const Box = styled.div`
    margin-top: 30px;
`;

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
`;
const Label = styled.label`
    padding: 5px 10px;
`;
const Input = styled.input`
    padding: 5px;
    box-sizing: border-box;
    text-align: center;
`;

const Result = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 50px;
`;
