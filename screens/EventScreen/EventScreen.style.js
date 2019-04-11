import styled from "styled-components";
import { colors } from "../../constants/Colors";

export const EventImage = styled.ImageBackground`
  width: 100%;
  height: 263px;
`;

export const EventInfoBox = styled.View`
  background-color: ${colors.white};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  margin-top: 160px;
  flex: 1;
  padding: 32px;
`;

export const InfoHeader = styled.View`
  flex-direction: row;
`;

export const TitleContainer = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  line-height: 30px;
`;

export const Container = styled.View``;

export const DescriptionText = styled.Text`
  line-height: 28px;
  margin-top: 32px;
  font-size: 16px;
  color: ${colors.gray};
`;
