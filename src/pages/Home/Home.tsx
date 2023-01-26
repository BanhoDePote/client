import { NavBar } from 'src/components/NavBar/NavBar'
import { TextExample } from 'src/components/TextExample/TextExample'

import { Container } from './styles'

export const Home = () => {
  const nameEmployee = 'Kadson'
  const typeEmployee = 'Garçom'
  const image =
    'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'

  return (
    <Container>
      <NavBar
        nameEmployee={nameEmployee}
        typeEmployee={typeEmployee}
        image={image}
      />
      <TextExample>Tela Home</TextExample>
    </Container>
  )
}
