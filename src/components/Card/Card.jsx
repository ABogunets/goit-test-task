import {
  Container,
  BkgdImage,
  GoitIcon,
  CenterLine,
  AvatarCircle,
  AvatarCircleBkgd,
} from "components/Card/Card.styled";

import bkgdImage from "components/assets/picture1.png";
import goitIcon from "components/assets/goit-icon.svg";
import avatarCircle from "components/assets/avatar-circle.svg";

export const Card = () => {
  return (
    <Container>
      <GoitIcon src={goitIcon} />
      <BkgdImage src={bkgdImage} />
      <CenterLine />
      <AvatarCircle src={avatarCircle} />
      <AvatarCircleBkgd />
    </Container>
  );
};
