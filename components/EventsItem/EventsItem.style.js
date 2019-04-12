import styled from "styled-components/native";
import { colors } from "../../constants/Colors";

export const Container = styled.TouchableOpacity`
  height: 124px;
  padding: 16px;
  border-left-width: 4px;
  border-left-color: ${colors.primary};
  border-radius: 5px;
  background-color: white;
  margin-bottom: 8px;
  flex-direction: row;
`;

export const TextEvents = styled.Text`
  color: ${colors.secondGray};
  font-size: 12px;
`;

export const EventTitle = styled.Text`
  font-size: 16px;
  color: ${colors.darkGray};
`;

export const FullDate = styled.Text`
  color: ${colors.secondGray};
  font-size: 14px;
`;

export const EventMiddleContainer = styled.View``;

export const EventInfoContainer = styled.View`
  justify-content: space-between;
  flex: 1;
`;

export const EventImage = styled.Image`
  height: 92px;
  width: 66px;
  border-radius: 5px;
  margin-right: 12px;
`;
