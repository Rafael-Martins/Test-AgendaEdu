import React from "react";

import { Button, ButtonText } from "./BaseButton.style";

export const BaseButton = props => (
  <Button onPress={props.onPress}>
    <ButtonText>{props.title}</ButtonText>
  </Button>
);
