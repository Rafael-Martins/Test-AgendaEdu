import React from "react";
import { View, Text, AsyncStorage } from "react-native";
import { BaseButton } from "../../components/BaseButton/BaseButton";

export class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

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
