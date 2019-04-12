import styled from "styled-components/native";
import { colors } from "../../constants/Colors";

const inputBorderColor = props =>
  props.isActive ? colors.primary : colors.whiteGray;

export const Input = styled.TextInput`
  color: black;
  height: 50px;
  border-style: solid;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-left-width: 1px;
  border-color: ${inputBorderColor};
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
  padding-left: 20px;
  flex: 1;
`;

export const InputContainer = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.TouchableHighlight`
  border-style: solid;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-color: ${inputBorderColor};
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  justify-content: center;
  padding-left: 5px;
  padding-right: 17px;
`;

export const Container = styled.View``;

export const LabelContainer = styled.View`
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${colors.gray};
`;
