import styled from "styled-components";
import React from "react";
import {GrAddCircle} from "react-icons/gr";

export const AddTable:React.FC =() =>{
    


    return (
        <>
        <AddButton>
             <GrAddCircle/>  
              <span>Adicionar Mesa</span>
        </AddButton>
        </>
    )
}

const AddButton = styled.button`
    max-width: 360px;
    width: 100%;
    height: 58px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    padding: 15px 7px;
    position: relative;
    font-size: larger;
    svg{
        position: absolute;
        left: 7px;
        top: auto;
        bottom: auto;
    }
    span{
        text-align: center;
    }
`

