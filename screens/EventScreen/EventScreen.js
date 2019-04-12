import React from "react";
import { View, Text } from "react-native";
import { EventTime } from "../../components/EventTime";
import { DateBox } from "../../components/DateBox";
import {
  EventImage,
  EventInfoBox,
  InfoHeader,
  TitleContainer,
  Title,
  Container,
  DescriptionText
} from "./EventScreen.style";

export class EventScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam("event").title,
      headerStyle: { height: 70 }
    };
  };

  render() {
    const event = this.props.navigation.getParam("event");
    return (
      <Container>
        <EventImage source={{ uri: event.image }}>
          <EventInfoBox>
            <InfoHeader>
              <DateBox date={event.startAt} />

              <TitleContainer>
                <Title>{event.title}</Title>
                <EventTime time={event.startAt} size={16} />
              </TitleContainer>
            </InfoHeader>

            <DescriptionText>{event.description}</DescriptionText>
          </EventInfoBox>
        </EventImage>
      </Container>
    );
  }
}
