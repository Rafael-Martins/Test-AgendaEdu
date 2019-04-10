import React from "react";
import { Container } from "./EventsItem.style";
import { Text } from "react-native";

export const EventsItem = props => (
  <Container>
    <Text>{props.event.title}</Text>
  </Container>
);
