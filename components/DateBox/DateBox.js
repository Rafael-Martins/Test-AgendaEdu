import React from "react";
import { Box, DayText, MonthText } from "./DateBox.style";
import { format } from "date-fns";
import locale from "date-fns/locale/pt";

export const DateBox = props => (
  <Box>
    <DayText>{format(props.date, "D")}</DayText>
    <MonthText>{format(props.date, "MMM", { locale })}</MonthText>
  </Box>
);
