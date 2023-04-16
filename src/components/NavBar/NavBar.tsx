import { Container } from './styles';
import { User } from 'src/store';

interface NavBarProps {
  user: User;
}

export const NavBar: React.FC<NavBarProps> = (params) => {
  const dataUser = params.user?.dataUser;


  return (
    <Container>
      <div>
        <h1>BanhoDePote</h1>
        <span>
          {dataUser?.user.employee} {dataUser?.user.name}
        </span>
      </div>
      <img src="" alt="" />
    </Container>
  );
};
