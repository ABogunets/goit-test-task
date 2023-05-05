import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Container, Title } from './Register.styled';

const Register = () => {
  return (
    <Container>
      <Title>Registration</Title>
      <RegisterForm />
    </Container>
  );
};

export default Register;
