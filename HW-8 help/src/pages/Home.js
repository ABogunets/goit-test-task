import { Container, Title, Wrapper } from './Home.styled';
import { MdContactPhone } from 'react-icons/md';

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          Welcome to
          <span>
            the PhoneBook!
            <MdContactPhone
              style={{
                width: 40,
                height: 40,
                color: 'steelblue',
                marginLeft: 5,
                marginRight: 5,
              }}
            />
          </span>
        </Title>
      </Wrapper>
    </Container>
  );
};

export default Home;
