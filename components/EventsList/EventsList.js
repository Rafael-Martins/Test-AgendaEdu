import React from "react";
import { Container, PageName, IconContainer } from "./EventsList.style";
import Icon from "react-native-vector-icons/FontAwesome";

export const EventsList = props => (
  <Container>
    <IconContainer>
      <Icon name="list" size={24} />
    </IconContainer>
    <PageName>Eventos</PageName>
  </Container>
);
