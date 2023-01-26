import { TextExample } from 'src/components/TextExample/TextExample'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, EmployeeForm } from './styles'

const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      window.location.assign('/home')
      const response = await axios.post('/api/login', {
        username,
        password,
      })
      // eslint-disable-next-line no-console
      console.log(response)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.response.data.error)
    }
  }

  return (
    <EmployeeForm onSubmit={handleSubmit}>
      <span>Nome de usuário:</span>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <span>Senha:</span>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Entrar</button>
      {error && <p>{error}</p>}
    </EmployeeForm>
  )
}
export const Auth = () => {
  useEffect(() => {
    const username = localStorage.getItem('username')
    if (username) {
      console.log(`Bem-vindo de volta, ${username}`)
    } else {
      console.log('Por favor, faça login')
    }
  }, [])

  return (
    <Container>
      <TextExample>BanhoDePote</TextExample>
      <Login />
    </Container>
  )
}
