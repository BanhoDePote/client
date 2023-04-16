import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: x-large;
  font-weight: bolder;
  color: var(--red-color);
  font-family: 'Righteous', cursive;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
  background-color: #b30505;
`

export const GenericNotFound = () => {
  return <Container><h1>404 - Not found</h1></Container>
}
