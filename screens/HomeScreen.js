import React from "react";
import { View, Text } from "react-native";

import { BaseInput } from "../components/BaseInput";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View>
        <Text>asd</Text>
        <BaseInput />
      </View>
    );
  }
}
