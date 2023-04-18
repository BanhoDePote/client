import { NavBar } from 'src/components/NavBar/NavBar'
import { Container } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { User } from 'src/store'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { setUserAction } from 'src/reducers/userReducers'

interface UserWithProp extends User {
  user: {
    name: string
    employee: string
    // outras propriedades do usuário
  }
}

export const Section = ({ children }: any) => {
  const navigate = useNavigate()
  const userData = useSelector((state: User) => state?.data?.dataUser)
  const [user, setUser] = useState<UserWithProp | null>(userData)
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
