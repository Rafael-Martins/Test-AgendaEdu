import React from "react";
import { createStackNavigator } from "react-navigation";
import { HomeScreen } from "../screens/HomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { EventScreen } from "../screens/EventScreen";
import { TopBar } from "../components/TopBar";

export const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Event: EventScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTitle: <TopBar />,
      headerStyle: { height: 70 }
    }
  }
);

export const LoginStack = createStackNavigator(
  { Login: LoginScreen },
  { headerMode: "none" }
);
