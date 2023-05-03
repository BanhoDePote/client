import { styled } from "styled-components"



export const ListOrdersDish = ({listDish}) =>{
    const list = listDish || null;

    const orderList = list?.map((dish) => { })

    return <Content>

    </Content>
}


const Content = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    overflow: scroll;
    max-width: 500px;
    justify-content: center;
`