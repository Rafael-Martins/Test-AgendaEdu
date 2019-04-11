import React from "react";
import {
  Container,
  TextEvents,
  EventTitle,
  TimeContainer,
  TimeText,
  FullDate,
  EventMiddleContainer,
  EventInfoContainer,
  EventImage
} from "./EventsItem.style";
import { Text, View } from "react-native";
import { format } from "date-fns";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../constants/Colors";
import locale from "date-fns/locale/pt";

const shadow = {
  shadowColor: "#733DBE",
  shadowOffset: {
    width: 0,
    height: 5
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,

  elevation: 10
};

export const EventsItem = props => (
  <Container style={shadow} onPress={() => props.goToEvent(props.event)}>
    <EventImage source={{ uri: props.event.image }} />

    <EventInfoContainer>
      <TextEvents>EVENTOS</TextEvents>
      <EventMiddleContainer>
        <EventTitle ellipsizeMode="tail" numberOfLines={1}>
          {props.event.title}
        </EventTitle>
        <TimeContainer>
          <Icon name="clock-o" color={colors.gray} size={14} />
          <TimeText>{format(props.event.startAt, "HH:mm")}</TimeText>
        </TimeContainer>
      </EventMiddleContainer>

      <FullDate>
        {format(props.event.sendAt, "dddd, D [de] MMMM [as] HH:mm[h]", {
          locale
        })}
      </FullDate>
    </EventInfoContainer>
  </Container>
);
