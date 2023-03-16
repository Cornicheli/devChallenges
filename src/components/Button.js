import styled from "styled-components";
import { colors } from "../assets/theme";

export const BtnDefault = styled.button`
  width: 81px;
  height: 36px;
  background: #e0e0e0;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  border-radius: 6px;
  font-size: 14px;
  margin: 0.7rem;
  border: none;
  outline: none;

  &:hover {
    background: #aeaeae;
    box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
    border-radius: 6px;
    cursor: pointer;
  }
`;

export const BtnDefaultBlue = styled.button`
  width: 88px;
  height: 36px;
  border: 1px solid #3d5afe;
  border-radius: 6px;
  font-size: 14px;
  margin: 0.7rem;
  color: #3d5afe;

  &:hover {
    background: rgba(41, 98, 255, 0.1);
    border: 1px solid #3d5afe;
    cursor: pointer;
  }
`;

export const BtnInvisibly = styled.button`
  width: 88px;
  height: 36px;
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin: 0.7rem;
  line-height: 20px;
  text-align: center;
  color: #3d5afe;
  border: none;
  outline: none;

  &:hover {
    width: 88px;
    height: 36px;
    background: rgba(41, 98, 255, 0.1);
    border-radius: 6px;
    cursor: pointer;
  }
`;

export const Btn = styled.button`
  width: 81px;
  height: 36px;
  background: ${colors.blue};
  color: #ffffff;
  border-radius: 6px;
  margin: 0.7rem;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const BtnOpacity = styled.button`
  width: 88px;
  height: 36px;
  background: #e0e0e0;
  border-radius: 6px;
  margin: 0.7rem;
  border: none;
  outline: none;
  color: #9e9e9e;

  &:hover {
    line-height: 20px;
    text-align: center;
    color: #9e9e9e;
    cursor: pointer;
  }
`;

export const BtnBuy = styled.button`
  display: flex;
  flex-direction: row;
  width: 105px;
  height: 36px;
  margin: 0.7rem;
  background: ${colors.blue};
  box-shadow: 0px 2px 3px rgba(0, 49, 202, 0.2);
  border-radius: 6px;
`;
 