import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { load, save } from "utils/storage";
import {
  Container,
  CardWrapper,
  CardBkgdImage,
  GoitIcon,
  CenterLine,
  AvatarFrame,
  AvatarContainer,
  Avatar,
  TextTweets,
  TextFollowers,
  Btn,
} from "components/Card/Card.styled";

import bkgdImage from "components/assets/card-bkgd-image.png";
import goitIcon from "components/assets/goit-icon.svg";
import avatarFrame from "components/assets/avatar-frame.png";
import avatarDefault from "components/assets/avatar-Hansel.png";

export const Card = ({ card }) => {
  const { id, user, tweets, followers, avatar } = card;

  const [value, setValue] = useState(followers);
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

  // ------LOCALstorage
  const isFirstRender = useRef(true);

  useEffect(() => {
    const savedData = load(id);
    if (savedData) {
      setValue(savedData.value);
      setIsClicked(savedData.isClicked);
    }
  }, [id]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    save(id, { value, isClicked });
  }, [id, value, isClicked]);
  // ---

  return (
    <Container>
      <CardWrapper>
        <GoitIcon src={goitIcon} />
        <CardBkgdImage src={bkgdImage} />
        <CenterLine />
        <AvatarFrame src={avatarFrame} />
        <AvatarContainer>
          <Avatar src={user ? avatar : avatarDefault} alt="" />
        </AvatarContainer>
        <TextTweets>{tweets.toLocaleString()} tweets</TextTweets>
        <TextFollowers>{value.toLocaleString()} followers</TextFollowers>
        <Btn onClick={handleClick} isClicked={isClicked}>
          {isClicked ? "Following" : "Follow"}
        </Btn>
      </CardWrapper>
    </Container>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};
