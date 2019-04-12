import styled from "styled-components/native";
import { colors } from "../../constants/Colors";

export const Box = styled.View`
  width: 60px;
  height: 60px;
  background-color: rgba(115, 61, 190, 0.1);
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const DayText = styled.Text`
  font-size: 22px;
  color: ${colors.primary};
  font-weight: bold;
`;

export const MonthText = styled.Text`
  text-transform: uppercase;
  font-size: 14px;
  color: ${colors.primary};
`;
