import React from "react";
import {
  Input,
  InputContainer,
  IconContainer,
  Container,
  LabelContainer,
  Label
} from "./BaseInput.style";
import Icon from "react-native-vector-icons/FontAwesome";

export const BaseInput = props => (
  <Container>
    <LabelContainer>
      <Label>{props.label}</Label>
    </LabelContainer>
    <InputContainer>
      <Input
        textContentType={props.type}
        secureTextEntry={props.type == "password"}
      />

      <IconContainer>
        <Icon name={props.icon} size={16} color="#AAAAAA" />
      </IconContainer>
    </InputContainer>
  </Container>
);
