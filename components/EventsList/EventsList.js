import React from "react";
import {
  Container,
  DayContainer,
  DayName,
  EventsContainer
} from "./EventsList.style";
import { EventsItem } from "../EventsItem/EventsItem";
import { format, isBefore } from "date-fns";
import ptLocale from "date-fns/locale/pt";

export const EventsList = props => {
  const eventsByDay = {};
  props.events.forEach(event => {
    const test = format(event.startAt, "dddd, D [de] MMMM", {
      locale: ptLocale
    });
    if (eventsByDay[test]) {
      eventsByDay[test].push(event);
      return;
    }
    eventsByDay[test] = [event];
  });
  const keyOrder = Object.keys(eventsByDay).sort((a, b) => {
    return isBefore(eventsByDay[a][0].startAt, eventsByDay[b][0].startAt);
  });
  return (
    <Container>
      {keyOrder.map(day => {
        return (
          <DayContainer key={day}>
            <DayName>{day}</DayName>

            <EventsContainer>
              {eventsByDay[day].map(event => (
                <EventsItem key={event.id} event={event} />
              ))}
            </EventsContainer>
          </DayContainer>
        );
      })}
    </Container>
  );
};
