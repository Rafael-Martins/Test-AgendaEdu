import styled from "styled-components";
import { colors } from "../../constants/Colors";

export const Button = styled.TouchableOpacity`
  height: 50px;
  border-radius: 5px;
  background-color: ${props => props.color || colors.primary};
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 16px;
`;
