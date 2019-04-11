import React from "react";
import { View, Text } from "react-native";
import { EventTime } from "../../components/EventTime";
import { DateBox } from "../../components/DateBox";

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
      <View>
        <Text>{event.title}</Text>
        <EventTime time={event.startAt} size={16} />
        <DateBox date={event.startAt} />
      </View>
    );
  }
}
