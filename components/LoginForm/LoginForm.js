import React from "react";
import {
  Container,
  Title,
  FormItem,
  ButtonContainer,
  InputsContainer
} from "./LoginForm.style";
import { BaseInput } from "../BaseInput";
import Emoji from "react-native-emoji";
import { BaseButton } from "../BaseButton/BaseButton";

export const LoginForm = props => (
  <Container>
    <InputsContainer>
      <Title>
        Faça seu login <Emoji name="key" />
      </Title>
      <FormItem>
        <BaseInput
          icon="envelope-o"
          label="E-mail ou usuário"
          type="username"
          onChangeText={text => {
            props.changeLoginItem(text, "email");
          }}
        />
      </FormItem>
      <FormItem>
        <BaseInput
          icon="eye-slash"
          label="Senha"
          type="password"
          onChangeText={text => {
            props.changeLoginItem(text, "password");
          }}
        />
      </FormItem>
    </InputsContainer>
    <ButtonContainer>
      <BaseButton title="Entrar" onPress={props.sendLogin} />
    </ButtonContainer>
  </Container>
);
