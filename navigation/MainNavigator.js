import React from "react";
import { createStackNavigator } from "react-navigation";
import { HomeScreen } from "../screens/HomeScreen";
import { LoginScreen } from "../screens/LoginScreen";

export const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export const LoginStack = createStackNavigator(
  { Login: LoginScreen },
  { header: "none" }
);
