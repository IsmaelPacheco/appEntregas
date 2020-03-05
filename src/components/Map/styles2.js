import styled, { css } from "styled-components/native";
import { Platform } from "react-native";

export const LocationBox2 = styled.View`
  background: #fff;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.1;
  elevation: 1;
  border: 1px solid #ddd;
  border-radius: 3px;
  flex-direction: row;

  ${Platform.select({
    ios: css`
      margin-top: 20px;
    `,
    android: css`
      margin-top: 50px;
      margin-left: 10px;
    `
  })}
`;

export const LocationText2 = styled.Text`
  margin: 8px 10px;
  font-size: 14px;
  color: #333;
`;

export const LocationTimeBox2 = styled.View`
  background: #ac101d;
  padding: 3px 8px;
`;

export const LocationTimeText2 = styled.Text`
  color: #fff;
  font-size: 12px;
  text-align: center;
`;

export const LocationTimeTextSmall2 = styled.Text`
  color: #fff;
  font-size: 10px;
  text-align: center;
`;

export const Back2 = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.select({ ios: 60, android: 60 })};
  left: 20px;
`;