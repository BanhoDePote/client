import { Link } from 'react-router-dom';
import { Container } from './styles';
import { User } from 'src/store';

interface NavBarProps {
  user: User;
}

export const NavBar: React.FC<NavBarProps> = (user:any) => {
  
  const data = user ? user.user : {
    employee:"Cargo",
    name:"Nome",
  };
  

  return (
    <Container>
      <div>
        <h1><Link to="/home">BanhoDePote</Link></h1>
        <span>
          {data?.user.employee} {data?.user.name}
        </span>
      </div>
      <img src="" alt="" />
    </Container>
  );
};