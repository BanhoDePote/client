import { TextExample } from '../../components/TextExample/TextExample'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, EmployeeForm } from './styles'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FadeLoader } from 'react-spinners'


const Login= () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    axios
      .post('/auth/sign-in', {
        email: username,
        password,
      })
      .then(response => {
        toast.success('Sucesso ao Logar')
        dispatch({ type: 'SET_USER', payload: { dataUser:response.data } });
        localStorage.setItem('user', JSON.stringify(response.data));
        setLoading(false)
        navigate("/home");
      })
      .catch(error => {
        toast.error("Error ao fazer o Loguin")
        setLoading(false)
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
      {loading?<FadeLoader size={20} color={'white'}/>:<button type="submit" disabled={loading}>Entrar</button>}
      
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
