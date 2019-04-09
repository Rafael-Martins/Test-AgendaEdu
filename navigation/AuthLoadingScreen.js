import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text
} from "react-native";

export class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("token");

    this.props.navigation.navigate(userToken ? "App" : "Login");
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <Text>LALALAa</Text>
      </View>
    );
  }
}
