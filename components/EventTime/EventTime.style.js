import styled from "styled-components";
import { colors } from "../../constants/Colors";

export const TimeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TimeText = styled.Text`
  margin-left: 6px;
  color: ${colors.gray};
  font-size: ${props => props.size}px;
`;
