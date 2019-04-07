import React from "react";
import { View } from "react-native";
import { LoginForm } from "../../components/LoginForm";
import { LoginContainer } from "./HomeScreen.style";

export class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <LoginContainer>
        <LoginForm />
      </LoginContainer>
    );
  }
}
