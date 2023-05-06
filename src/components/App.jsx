import { useState, useEffect, useRef } from "react";
import { Card } from "components/Card/Card";
import { Container } from "components/App.styled";
import { load, save } from "utils/storage";

const App = () => {
  const [value, setValue] = useState(1500);
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
  // ---------LOCAL STORAGE
  // const isFirstRender = useRef(true);

  // useEffect(() => {
  //   const savedContacts = load("contacts");
  //   if (savedContacts) {
  //     setContacts(savedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return;
  //   }
  //   save("contacts", contacts);
  // }, [contacts]);

  useEffect(() => {
    const savedFolowersNumber = load("folowersNumber");
    const savedisClickedState = load("isClicked");

    console.log("savedFolowersNumber", savedFolowersNumber);
    if (savedFolowersNumber) {
      setValue(savedFolowersNumber);
      setIsClicked(savedisClickedState);
    }
  }, []);

  useEffect(() => {
    // if (isFirstRender.current) {
    //   isFirstRender.current = false;
    //   return;
    // }
    save("folowersNumber", value);
    save("isClicked", isClicked);
  }, [value, isClicked]);

  //-------------------

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
