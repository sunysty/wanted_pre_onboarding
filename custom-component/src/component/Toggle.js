import React,{useState} from 'react';
import styled from 'styled-components';

const Toggle = () => {
    const [toggleState, setToggleState] = useState(false);

    return(
    <>
        <h1>Toggle</h1>

            {
                toggleState 
                ?
                <>
                <ToggleBox/>
                <ToggleBtn/>
                </>
                :
                <>
                <ToggleBox/>
                <ToggleBtn/>
                </>
            }
    </>
    )
}


const ToggleBox = styled.div`
    width:50px;
    height:20px;
    background:purple;
    border-radius:20px;
`

const ToggleBtn = styled.button`
    width:20px;
    height:20px;
    border-radius:50%;
    border:none;
    background:yellow;
`

export default Toggle;