import {
  Container,
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

import bkgdImage from "components/assets/picture1.png";
import goitIcon from "components/assets/goit-icon.svg";
import avatarFrame from "components/assets/avatar-frame.png";
import avatarDefault from "components/assets/avatar-Hansel.png";

export const Card = ({ onBtnClick, followersNumber, isClicked }) => {
  const a = 1;
  const imgUrl =
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1171.jpg";
  return (
    <Container>
      <GoitIcon src={goitIcon} />
      <CardBkgdImage src={bkgdImage} />
      <CenterLine />
      <AvatarFrame src={avatarFrame} />
      <AvatarContainer>
        <Avatar src={a ? imgUrl : avatarDefault} alt="" />
      </AvatarContainer>

      <TextTweets>777 Tweets</TextTweets>
      <TextFollowers>
        {followersNumber.toLocaleString()} Followers
      </TextFollowers>
      <Btn onClick={() => onBtnClick()} isClicked={isClicked}>
        {isClicked ? "Following" : "Follow"}
      </Btn>
    </Container>
  );
};
