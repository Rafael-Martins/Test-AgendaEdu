import React from "react";

import { Button, ButtonText } from "./BaseButton.style";

export const BaseButton = props => (
  <Button testID="Button" onPress={props.onPress}>
    <ButtonText testID="ButtonText">{props.title}</ButtonText>
  </Button>
);
