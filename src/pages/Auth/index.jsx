import { TextExample } from '../../components/TextExample/TextExample'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, EmployeeForm } from './styles'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login= () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const SERVE_API = import.meta.env.VITE_SERVER_API;
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    axios
      .post(SERVE_API+'/auth/sign-in', {
        email: username,
        password,
      })
      .then(response => {
        toast.success('Sucesso ao Logar')
        dispatch({ type: 'SET_USER', payload: { dataUser:response.data } });
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate("/home");
      })
      .catch(error => {
        toast.error("Error ao fazer o Loguin")
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
