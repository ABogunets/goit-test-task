import styled from "styled-components";

export const Container = styled.li`
  margin-left: auto;
  margin-right: auto;
`;

export const CardWrapper = styled.div`
  position: relative;
  height: 460px;
  width: 380px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 20px;
  padding: 28px 36px 36px;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  color: #ebd8ff;
`;

export const CardBkgdImage = styled.img``;
export const GoitIcon = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const CenterLine = styled.div`
  position: absolute;
  height: 8px;
  width: 380px;
  top: 210px;
  left: 0px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const AvatarFrame = styled.img`
  position: absolute;
  top: 174px;
  left: 150px;
`;
export const AvatarContainer = styled.div`
  position: absolute;
  top: 182px;
  left: 163px;

  height: 64px;
  width: 64px;
  border-radius: 50%;

  overflow: hidden;
`;

export const Avatar = styled.img``;

export const TextTweets = styled.p`
  margin-top: 88px;
  text-transform: uppercase;
  text-align: center;
`;

export const TextFollowers = styled.p`
  margin-top: 16px;
  text-transform: uppercase;
  text-align: center;
`;

export const Btn = styled.button`
  display: block;

  margin-top: 26px;
  margin-right: auto;
  margin-left: auto;

  border: none;
  padding: 14px 56px;
  border-radius: 10px;
  color: #373737;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  background-color: ${({ isClicked }) => (isClicked ? "#5CD3A8" : "#EBD8FF")};

  text-transform: uppercase;
  font-size: 18px;
  line-height: 1.22;
  font-weight: 600;
`;
