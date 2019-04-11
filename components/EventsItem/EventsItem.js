import React from "react";
import {
  Container,
  TextEvents,
  EventTitle,
  FullDate,
  EventMiddleContainer,
  EventInfoContainer,
  EventImage
} from "./EventsItem.style";
import { format } from "date-fns";
import locale from "date-fns/locale/pt";
import { EventTime } from "../EventTime";

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
        <EventTime time={props.event.startAt} size={14} />
      </EventMiddleContainer>

      <FullDate>
        {format(props.event.sendAt, "dddd, D [de] MMMM [as] HH:mm[h]", {
          locale
        })}
      </FullDate>
    </EventInfoContainer>
  </Container>
);
