import styled from "styled-components";

export const Container = styled.div`
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

  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  color: #ebd8ff;
`;

export const BkgdImage = styled.img`
  /* outline: 1px solid tomato; */
`;
export const GoitIcon = styled.img`
  /* outline: 1px solid tomato; */
  position: absolute;
  margin-top: -8px;
  margin-left: -16px;
`;
export const CenterLine = styled.div`
  position: absolute;
  height: 8px;
  width: 380px;
  margin-top: 14px;
  margin-left: -36px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const AvatarCircle = styled.img`
  position: absolute;
  margin-top: -22px;
  margin-left: 114px;
  z-index: 2;
`;
export const AvatarCircleBkgd = styled.div`
  position: absolute;
  margin-top: -22px;
  margin-left: 119px;

  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: #5736a3;
  /* outline: 1px solid tomato; */
`;

export const Avatar = styled.img`
  /* outline: 1px solid tomato; */
  position: absolute;
  margin-top: -13px;
  margin-left: 128px;
`;

export const TextTweets = styled.p`
  /* outline: 1px solid tomato; */
  margin-top: 88px;
  text-transform: uppercase;
  text-align: center;
`;

export const TextFollowers = styled.p`
  /* outline: 1px solid tomato; */
  margin-top: 16px;
  text-transform: uppercase;
  text-align: center;
`;

export const Btn = styled.button`
  /* outline: 1px solid tomato; */
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
  text-transform: uppercase;
  font-size: 18px;
  line-height: 1.22;
  font-weight: 600;
`;
