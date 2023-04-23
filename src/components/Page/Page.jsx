import { NavBar } from '../NavBar/NavBar'
import { Container } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


export const Section = ({ children }) => {
  const navigate = useNavigate()
  const userData = useSelector((state) => state?.data?.dataUser)
  const [user, setUser] = useState(userData)
  const dispatch = useDispatch()

  useEffect(() => {
    const localStorageUser = localStorage.getItem('user')

    if (user) {
      console.log(userData)
    } else if (localStorageUser) {
      const parsedUser = JSON.parse(localStorageUser)
      setUser(parsedUser)
    } else {
      navigate('/')
    }
    dispatch({ type: 'SET_USER', payload: { dataUser:user } });
    

  }, [user, userData])

  return (
    <Container>
      <NavBar user={user} />
      {children}
    </Container>
  )
}
