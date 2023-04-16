import { TextExample } from 'src/components/TextExample/TextExample'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, EmployeeForm } from './styles'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    axios
      .post('http://localhost:4000/auth/sign-in', {
        email: username,
        password,
      })
      .then(response => {
        toast.success('Sucesso ao Logar')
        dispatch({ type: 'SET_USER', payload: { dataUser:response.data } });
        navigate("/home");
      })
      .catch(error => {
        const errors = error.response.data.details
        for (error of errors) {
          toast.error(error)
        }
      })
  }

  return (
    <EmployeeForm onSubmit={handleSubmit}>
      <span>Email do usuário:</span>
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
