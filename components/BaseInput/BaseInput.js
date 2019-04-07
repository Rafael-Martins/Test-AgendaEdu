import React from "react";
import { Input, InputContainer } from "./BaseInput.style";
import Icon from "react-native-vector-icons/FontAwesome";

export const BaseInput = props => (
  <InputContainer>
    <Input />
    <Icon name="envelope-o" />
  </InputContainer>
);
