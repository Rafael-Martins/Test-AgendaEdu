import React from "react";
import { View, Text, AsyncStorage } from "react-native";
import { BaseButton } from "../../components/BaseButton/BaseButton";
import http from "../../services/http";

export class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    try {
      const response = await http.getEvents();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View>
        <Text>SAASDHLKASHDL</Text>
        <Text>SAASDHLKASHDL</Text>
        <BaseButton
          title="logoff"
          onPress={async params => {
            console.log("a");
            await AsyncStorage.clear();
            this.props.navigation.navigate("AuthLoadingScreen");
          }}
        />
      </View>
    );
  }
}
