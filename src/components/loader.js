import React, { useState } from "react";
import styled from 'styled-components';



const Div = styled.div`
    position: absolute;
    z-index: 9999999;
    top: 0;
    left: 0;
    height: 300px;
    width: 300px;
    background-color: red;
`;


const Loader = () => {

    const [ monte, setMonte ] = useState(true);

    setTimeout( () => {
        
        setMonte(false);

    }, 3000)

    return (
        <>
            {
                monte && (<Div>
                            <h1>holaaaas</h1>
                          </Div>)
            }
        </>
    )
}


export default Loader;