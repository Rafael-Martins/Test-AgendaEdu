import React from "react";
import { Container, Title, FormItem } from "./LoginForm.style";
import { BaseInput } from "../BaseInput";

export const LoginForm = props => (
  <Container>
    <Title>Faça seu login</Title>
    <FormItem>
      <BaseInput icon="envelope-o" label="E-mail ou usuário" type="username" />
    </FormItem>
    <BaseInput icon="eye-slash" label="Senha" type="password" />
  </Container>
);
