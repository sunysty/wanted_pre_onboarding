import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const AutoComplete = () => {
    let dataList = ['antique', 'refurbished', 'rustic', 'vintage', '중고A급'];

    const [value, setValue] = useState('');
    const onChange = (e) => {
        setValue(e.target.value);
    };

    let dataFilter = dataList.filter(
        (data) => data.slice(0, value.length) === value
    );
    const onClickItem = (data) => {
        setValue(data.target.textContent);
    };
    const handleRemove = () => {
        setValue('');
    };

    return (
        <>
            <GlobalStyle />
            <Container>
                <Title>AutoComplete</Title>
                <AutoCompleteBox>
                    <Input onChange={onChange} value={value} />
                    <DeleteBtn onClick={handleRemove}>x</DeleteBtn>
                    <AutoCompleteItems id='items'>
                        {value !== '' &&
                            dataFilter.map((data, i) => (
                                <AutoCompleteItem onClick={onClickItem} key={i}>
                                    {data}
                                </AutoCompleteItem>
                            ))}
                    </AutoCompleteItems>
                </AutoCompleteBox>
            </Container>
        </>
    );
};

export default AutoComplete;

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

const AutoCompleteBox = styled.div`
    width: 80%;
    height: auto;
    position: relative;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    border: none;
    border-radius: 5px;
`;

const Input = styled.input`
    width: 100%;
    font-size: 20px;
    border: none;
    padding: 10px;
    box-sizing: border-box;
    :focus {
        animation-name: border-focus;
        animation-duration: 0.1s;
        animation-fill-mode: forwards;
        outline: none;
        box-shadow: 8px 8px 8px #ddd;
        z-index: 0;
    }
`;

const GlobalStyle = createGlobalStyle`
    @keyframes border-focus{
      from{border-radius:0;}
      to{border-radius:8px;}
    }
`;

const DeleteBtn = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    font-size: 20px;
    color: #aaa;
    padding: 8px;
    box-sizing: border-box;
    cursor: pointer;
`;
const AutoCompleteItems = styled.div`
    width: 100%;
    box-shadow: 8px 8px 8px #ddd;
    border-radius: 0 0 10px 10px;
    background: #fff;
    z-index: 2;
    transform: translateY(-2px);
`;

const AutoCompleteItem = styled.div`
    border: none;
    width: 100%;
    box-sizing: border-box;
    padding: 5px 10px;
    :hover {
        background: #eee;
        cursor: pointer;
    }
`;
