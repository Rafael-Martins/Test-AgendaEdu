import React from "react";
import { TimeContainer, TimeText } from "./EventTime.style";
import { format } from "date-fns";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../constants/Colors";

export const EventTime = props => (
  <TimeContainer>
    <Icon name="clock-o" color={colors.gray} size={14} />
    <TimeText testID="TimeText" size={props.size || 14}>
      {format(props.time, "HH:mm")}
    </TimeText>
  </TimeContainer>
);
