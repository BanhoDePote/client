import { NavBar } from 'src/components/NavBar/NavBar'
import { Container } from './styles'
import { useSelector } from 'react-redux'
import { User } from 'src/store'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface UserWithProp extends User {
  user: {
    name: string;
    employee: string;
    // outras propriedades do usuário
  };
}

export const Section = ({ children }: any) => {
  const navigate = useNavigate();
  const userData = useSelector((state: User) => state?.data?.data);

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [userData, navigate]);

  const userWithProp: UserWithProp = {
    ...userData,
    user: userData?.user,
  };

  

  return (
    <Container>
      <NavBar user={userWithProp} />
      {children}
    </Container>
  );
};