import React, { useState } from 'react';
import styled from 'styled-components';

const Tag = () => {
    const [tagList, setTagList] = useState([
        {
            id: 0,
            text: 'CodeState',
        },
        {
            id: 1,
            text: 'JJang',
        },
    ]);
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onKeyPress = (e) => {
        onChange(e);
        if (e.key === 'Enter') {
            setTagList(tagList.concat({ id: tagList.length, text: text }));
            e.target.value = null;
        }
    };

    const handleRemove = (tag) => {
        setTagList(tagList.filter((tagList) => tagList.id !== tag.id));
        console.log('<?', tag.id, tagList);
    };

    return (
        <>
            <Container>
                <Title>Tag</Title>
                <TagBox>
                    {tagList.map((tag, i) => (
                        <TagItem key={i}>
                            {/* {tag.text} */}
                            {tagList[i].text}
                            <DeleteItem onClick={() => handleRemove(tag)}>
                                x
                            </DeleteItem>
                        </TagItem>
                    ))}
                    <Input
                        type='text'
                        placeholder='Press enter to add tags'
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                    />
                </TagBox>
            </Container>
        </>
    );
};

export default Tag;

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

const TagBox = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    border: 1px solid #999;
    padding: 10px;
    margin: 70px auto 0;
    box-sizing: border-box;
    border-radius: 5px;
`;

const TagItem = styled.div`
    padding: 5px 7px;
    box-sizing: border-box;
    margin-right: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    background: purple;
    color: #fff;
    font-size: 15px;
`;

const DeleteItem = styled.div`
    width: 15px;
    height: 15px;
    margin: 0 0 0 7px;
    border-radius: 50%;
    background: #fff;
    color: purple;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Input = styled.input`
    border: none;
    padding: 5px;
`;
