import { FadeLoader } from 'react-spinners'
import styled from 'styled-components'

export const Loading = () => {
  return (
    <Container>
      <FadeLoader size={150} color={'red'} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`
