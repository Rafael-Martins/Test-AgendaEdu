import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { HomeStack, LoginStack } from "./MainNavigator";
import { AuthLoadingScreen } from "./AuthLoadingScreen";

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      App: HomeStack,
      Login: LoginStack,
      AuthLoadingScreen: AuthLoadingScreen
    },
    {
      initialRouteName: "AuthLoadingScreen"
    }
  )
);
