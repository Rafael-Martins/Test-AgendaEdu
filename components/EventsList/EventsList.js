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
    const dayName = format(event.startAt, "dddd, D [de] MMMM", {
      locale: ptLocale
    });
    if (eventsByDay[dayName]) {
      eventsByDay[dayName].push(event);
      return;
    }
    eventsByDay[dayName] = [event];
  });
  const keyOrder = Object.keys(eventsByDay).sort((a, b) => {
    return isBefore(eventsByDay[a][0].startAt, eventsByDay[b][0].startAt);
  });
  return (
    <Container>
      {keyOrder.map(day => {
        return (
          <DayContainer key={day} testID="DayContainer">
            <DayName testID="DayName">{day}</DayName>

            <EventsContainer>
              {eventsByDay[day].map(event => (
                <EventsItem
                  key={event.id}
                  event={event}
                  goToEvent={props.goToEvent}
                />
              ))}
            </EventsContainer>
          </DayContainer>
        );
      })}
    </Container>
  );
};
