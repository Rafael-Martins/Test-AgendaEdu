import React from "react";
import { View, Text, AsyncStorage } from "react-native";
import { BaseButton } from "../../components/BaseButton/BaseButton";
import http from "../../services/http";
import { TopBar } from "../../components/TopBar";

export class EventScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <TopBar />,
    headerStyle: { height: 70 }
  };

  async componentDidMount() {
    try {
      const response = await http.getEvents();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View>
        <Text>EEEEEVENT</Text>
      </View>
    );
  }
}
