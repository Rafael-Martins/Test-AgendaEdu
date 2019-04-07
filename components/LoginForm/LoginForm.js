import React from "react";
import { Container, Title, FormItem } from "./LoginForm.style";
import { BaseInput } from "../BaseInput";
import Emoji from "react-native-emoji";
import { BaseButton } from "../BaseButton/BaseButton";

export const LoginForm = props => (
  <Container>
    <Title>
      Faça seu login <Emoji name="key" />
    </Title>
    <FormItem>
      <BaseInput icon="envelope-o" label="E-mail ou usuário" type="username" />
    </FormItem>
    <BaseInput icon="eye-slash" label="Senha" type="password" />

    <FormItem>
      <BaseButton title="test" />
    </FormItem>
  </Container>
);
