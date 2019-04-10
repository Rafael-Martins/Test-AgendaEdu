import React from "react";
import { Container, PageName, IconContainer } from "./TopBar.style";
import Icon from "react-native-vector-icons/FontAwesome";

export const TopBar = props => (
  <Container>
    <IconContainer>
      <Icon name="list" size={24} />
    </IconContainer>
    <PageName>Eventos</PageName>
  </Container>
);
