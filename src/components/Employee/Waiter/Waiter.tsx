import styled from 'styled-components'

const Button = styled.button`
  max-width: 360px;
  width: 100%;
  max-height: 58px;
  height: 100%;
  background-color: #d9d9d9;
  border: 1px solid #8f8f8f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`

export const HomeWaiter = () => {
  return <Button>Adicionar Mesa</Button>
}

const MyTables = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10;
  align-items: center;
`
