import React from "react";
import { LoginForm } from "../../components/LoginForm";
import { LoginContainer } from "./LoginScreen.style";
import http from "../../services/http";

export class LoginScreen extends React.Component {
  state = {
    email: "",
    password: ""
  };

  changeLoginItem = (text, field) => {
    this.setState({ [field]: text });
  };

  sendLogin = async () => {
    try {
      const response = await http.login(this.state.email, this.state.password);
      this.props.navigation.navigate("AuthLoadingScreen");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <LoginContainer>
        <LoginForm
          changeLoginItem={this.changeLoginItem}
          sendLogin={this.sendLogin}
        />
      </LoginContainer>
    );
  }
}
