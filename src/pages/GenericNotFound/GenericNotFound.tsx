import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: x-large;
  font-weight: bolder;
  color: var(--red-color);
`

export const GenericNotFound = () => {
  return <Container>404 - Not found</Container>
}
