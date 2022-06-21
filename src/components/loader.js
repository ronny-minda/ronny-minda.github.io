import React, { useState } from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';



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
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                {
                    monte && (
                                <Div>
                                    <h1>holaaaas</h1>
                                </Div>
                            )
                }
            </motion.div>
        </>
    )
}


export default Loader;