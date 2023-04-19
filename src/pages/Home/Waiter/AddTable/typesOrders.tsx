import { useState } from "react"
import { Modal } from "src/components/Modal"
import styled from "styled-components"




export const TypesOrders = ({modalOpen, setModalOpen}) =>{

    const [order, setOrder] = useState({})


    return <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <Content>
                    <h3>Adicionar Pedido</h3>
                    <TypesDish>
                        <span>Refeição</span>
                        <span>Petisco</span>
                    </TypesDish>
                    <ListOrders>

                    </ListOrders>
                </Content>
           </Modal>
    

}

const Content = styled.div`
    width: 300px;
    min-height: 300px;
    display: flex;
    align-items: center;
    padding: 20px 0;
    flex-direction: column;
`

const TypesDish = styled.div`
    margin-top: 10px;
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    span{
        padding: 5px 12px;
        border-radius: 6px;
        background-color: #d2d2d2;
        border: 1px solid #979797;
        color: #4e4e4e;
    }


`

const ListOrders = styled.div`
margin-top: 10px;
    background-color: #D9D9D9;
    width: 100%;
    border: 1px solid black;
    min-height: 200px;
`