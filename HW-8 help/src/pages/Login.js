import { LoginForm } from 'components/LoginForm/LoginForm';
import { Container, Title } from './Login.styled';

const Login = () => {
  return (
    <Container>
      <Title>Log In</Title>
      <LoginForm />
    </Container>
  );
};

export default Login;
