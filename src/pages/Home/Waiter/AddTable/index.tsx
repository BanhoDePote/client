import styled from "styled-components";
import React, { useState } from "react";
import {GrAddCircle} from "react-icons/gr";
import { Modal } from "src/components/Modal";
import { Link } from "react-router-dom";

export const AddTable:React.FC =({user}) =>{

    const [modalOpen, setModalOpen] = useState(false);

    const numbers = [];
    for (let i = 1; i <= 50; i++) {
        numbers.push(i);
    }


    return (
        <>
        <AddButton onClick={() => setModalOpen(true)}>
             <GrAddCircle/>  
              <span>Adicionar Mesa</span>
        </AddButton>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
            <h2>Selecione a Mesa:</h2>
            <p>Conteúdo do modal</p>
            <Content>
                {numbers.map((box)=>{
                    return <TableId to={`/waiter/${box}`}>{box}</TableId>
                })}
            </Content>
        </Modal>
    
        </>
    )
}

const Content = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    overflow: scroll;
    max-width: 500px;
`

const TableId = styled(Link)`
     width: 40px;
        height: 40px;
        background-color: #D9D9D9;
        border: 1px solid #8F8F8F;
        display: flex;
        justify-content: center;
        text-decoration: none;
        border-radius: 6px;
        color: #363636;
        align-items: center;
        &:hover{
        filter: brightness(0.8);
        cursor: pointer;
        }
`


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

