import { useState } from "react";
import { Card } from "components/Card/Card";
import { Container } from "components/App.styled";
const App = () => {
  const [value, setValue] = useState(100);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked === false) {
      setValue((prevValue) => prevValue + 1);
      setIsClicked(true);
    } else {
      setValue((prevValue) => prevValue - 1);
      setIsClicked(false);
    }
  };

  return (
    <Container>
      <Card
        onBtnClick={handleClick}
        followersNumber={value}
        isClicked={isClicked}
      />
    </Container>
  );
};

export default App;
