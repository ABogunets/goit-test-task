import {
  Container,
  BkgdImage,
  GoitIcon,
  CenterLine,
  AvatarCircle,
  AvatarCircleBkgd,
  Avatar,
  TextTweets,
  TextFollowers,
  Btn,
} from "components/Card/Card.styled";

import bkgdImage from "components/assets/picture1.png";
import goitIcon from "components/assets/goit-icon.svg";
import avatarCircle from "components/assets/avatar-circle.svg";
import avatar from "components/assets/avatar-Hansel.png";

export const Card = ({ onBtnClick, followersNumber, isClicked }) => {
  return (
    <Container>
      <GoitIcon src={goitIcon} />
      <BkgdImage src={bkgdImage} />
      <CenterLine />
      <AvatarCircle src={avatarCircle} />
      <AvatarCircleBkgd />
      <Avatar src={avatar} alt="avatar" />
      <TextTweets>777 Tweets</TextTweets>
      <TextFollowers>{followersNumber} Followers</TextFollowers>
      <Btn onClick={() => onBtnClick()} isClicked={isClicked}>
        {isClicked ? "Following" : "Follow"}
      </Btn>
    </Container>
  );
};
